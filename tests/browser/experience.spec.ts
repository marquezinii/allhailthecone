import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("public routes render with accessible navigation and no broken assets", async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("response", (response) => {
    if (response.status() >= 400)
      errors.push(`${response.status()} ${response.url()}`);
  });
  for (const path of [
    "/",
    "/lore",
    "/characters",
    "/world",
    "/gallery",
    "/canon",
    "/about",
    "/community",
    "/factions",
    "/timeline",
    "/privacy",
    "/identity",
  ]) {
    await page.goto(path);
    await page.waitForLoadState("networkidle");
    await expect(page.locator("main h1:visible")).toHaveCount(1);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBeTruthy();
    const report = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(report.violations, `${path}: accessibility`).toEqual([]);
  }
  expect(errors).toEqual([]);
  await page.goto("/");
  for (const img of await page.locator("main img").all()) {
    await img.evaluate((el) =>
      el.scrollIntoView({ behavior: "instant", block: "center" }),
    );
    await expect
      .poll(() =>
        img.evaluate(
          (el: HTMLImageElement) => el.complete && el.naturalWidth > 0,
        ),
      )
      .toBeTruthy();
  }
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.screenshot({
    path: `artifacts/home-${testInfo.project.name}.png`,
    fullPage: true,
    scale: "css",
  });
});

test("gallery combines canon filters and search, recovers from empty results, and opens detail pages", async ({
  page,
}) => {
  await page.goto("/gallery");
  await page.getByRole("button", { name: "Canon", exact: true }).click();
  await expect(page.locator(".art-card:visible")).toHaveCount(1);
  await page.getByRole("searchbox").fill("no-such-island");
  await expect(
    page.getByRole("heading", { name: "No records found." }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Clear filters" }).click();
  await expect(page.locator(".art-card:visible")).toHaveCount(31);
  await page.getByRole("searchbox").fill("kindness");
  await expect(page.locator(".art-card:visible")).toHaveCount(1);
  await page
    .getByRole("heading", { name: "The Kindness Drift" })
    .getByRole("link")
    .click();
  await expect(page).toHaveURL(/\/gallery\/the-kindness-drift$/);
  await expect(page.locator(".art-detail-image img")).toBeVisible();
  await page.getByRole("link", { name: "Back to the archive" }).click();
  await expect(page.locator(".art-card:visible")).toHaveCount(31);
});

test("menu supports keyboard and mobile; motion preferences and observations work", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  if (testInfo.project.name === "mobile") {
    await expect(page.locator("#hero-title")).toHaveCSS("opacity", "1");
  }
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  if (testInfo.project.name === "mobile") {
    await page.getByRole("button", { name: "Menu" }).click();
    await expect(page.locator("#main-nav")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("button", { name: "Menu" })).toBeFocused();
    await page.getByRole("button", { name: "Menu" }).click();
    await page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name: "The lore" })
      .click();
    await expect(page).toHaveURL(/\/lore$/);
    await page.goto("/");
  }
  await page.getByRole("button", { name: "The unknown", exact: true }).click();
  await expect(page.locator("#observation-text")).toContainText(
    "Origin, purpose",
  );
  if (testInfo.project.name === "desktop") {
    const relic = page.locator(".relic");
    await relic.hover({ position: { x: 50, y: 60 } });
    await expect(relic).toHaveClass(/webgl-ready/);
    await expect(relic.locator("canvas")).toBeVisible();
    await expect
      .poll(() =>
        relic.evaluate((el) =>
          Math.abs(
            parseFloat((el as HTMLElement).style.getPropertyValue("--ry")),
          ),
        ),
      )
      .toBeGreaterThan(1);
    await page.evaluate(() =>
      window.scrollTo({ top: 4000, behavior: "instant" }),
    );
    await expect
      .poll(() =>
        page
          .locator("[data-hero]")
          .evaluate((el) => el.getBoundingClientRect().bottom),
      )
      .toBeLessThan(0);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await expect
      .poll(() =>
        page
          .locator("[data-hero]")
          .evaluate((el) =>
            (el as HTMLElement).style.getPropertyValue("--hero-shift"),
          ),
      )
      .toBe("0px");
  }
  await page.getByRole("button", { name: "Pause atmosphere" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-motion", "paused");
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Resume atmosphere" }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("button", { name: "Resume atmosphere" }).click();
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator("html")).toHaveAttribute("data-motion", "paused");
  expect(
    await page
      .locator(".relic-object")
      .evaluate((el) => getComputedStyle(el).animationName),
  ).toBe("none");
});

test("the WebGL scene loads at its section and keeps the mobile fallback", async ({
  page,
}) => {
  const scripts: string[] = [];
  page.on("response", (response) => {
    if (response.url().endsWith(".js")) scripts.push(response.url());
  });

  await page.goto("/");
  await page.waitForLoadState("networkidle");
  expect(scripts.join("\n")).not.toContain("SacredConeCanvas");

  const relic = page.locator(".relic.immersive");
  await relic.scrollIntoViewIfNeeded();
  const desktopScene = await page.evaluate(() => innerWidth > 760);

  if (desktopScene) {
    await expect(relic).toHaveClass(/webgl-ready/);
    await expect(relic.locator("canvas")).toBeVisible();
    await expect
      .poll(() => scripts.some((url) => url.includes("SacredConeCanvas")))
      .toBeTruthy();
  } else {
    await page.waitForTimeout(300);
    await expect(relic.locator("canvas")).toHaveCount(0);
    expect(scripts.join("\n")).not.toContain("SacredConeCanvas");
  }
});

test("core navigation and the archive remain usable without JavaScript", async ({
  browser,
  baseURL,
}, testInfo) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: testInfo.project.use.viewport ?? null,
  });
  const page = await context.newPage();
  await page.goto(baseURL!);
  await expect(
    page.getByRole("navigation", { name: "Main navigation" }),
  ).toBeVisible();
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Gallery", exact: true })
    .click();
  await expect(page.locator(".art-card")).toHaveCount(31);
  await expect(page.locator("#gallery-tools")).toBeHidden();
  await context.close();
});

test("language switch keeps the current route in all five locales", async ({
  page,
}, testInfo) => {
  await page.goto("/world");
  if (testInfo.project.name === "mobile")
    await page.getByRole("button", { name: "Menu" }).click();
  await page.locator(".language-switch summary").click();
  await expect(page.locator(".language-switch")).toHaveAttribute("open", "");
  await page.keyboard.press("Escape");
  await expect(page.locator(".language-switch")).not.toHaveAttribute(
    "open",
    "",
  );
  await page.locator(".language-switch summary").click();
  await page.locator('.language-switch a[lang="pt-BR"]').click();
  await expect(page).toHaveURL(/\/pt\/world$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
  await expect(
    page.getByRole("heading", { name: "O mapa ainda está se revelando." }),
  ).toBeVisible();

  for (const [path, lang] of [
    ["/zh/world", "zh-CN"],
    ["/de/world", "de"],
    ["/fr/world", "fr"],
  ] as const) {
    await page.goto(path);
    await expect(page.locator("html")).toHaveAttribute("lang", lang);
    await expect(page.getByText(/Vemryx/)).toHaveCount(1);
  }
});

test("official Discord links are present in the community and shared footer", async ({
  page,
}) => {
  await page.goto("/community");
  const discord = "https://discord.gg/9VyUNRk7N";
  await expect(
    page.getByRole("link", { name: "Join the official Discord" }),
  ).toHaveAttribute("href", discord);
  await expect(page.locator(".site-footer .discord-link")).toHaveAttribute(
    "href",
    discord,
  );
});
