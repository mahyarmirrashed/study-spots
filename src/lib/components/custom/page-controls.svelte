<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { Button } from "$lib/components/ui/button/index.js";
  import { i18n } from "$lib/i18n";
  import * as m from "$lib/paraglide/messages.js";
  import {
    setLanguageTag,
    type AvailableLanguageTag,
  } from "$src/lib/paraglide/runtime";
  import { Sun, Moon } from "lucide-svelte/icons";
  import { toggleMode } from "mode-watcher";
  import { PersistedState } from "runed";

  const language = new PersistedState<AvailableLanguageTag>("language", "en");

  function switchLanguage() {
    if (language.current === "en") language.current = "fr";
    else if (language.current === "fr") language.current = "en";

    setLanguageTag(language.current);

    const canonicalPath = i18n.route($page.url.pathname);
    const localisedPath = i18n.resolveRoute(canonicalPath, language.current);
    goto(localisedPath);
  }
</script>

<div class="absolute right-2.5 top-2.5 z-10 flex flex-col gap-y-2">
  <Button onclick={toggleMode} variant="outline" size="icon">
    <Sun
      class="h-fit w-fit rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
    />
    <Moon
      class="absolute h-fit w-fit rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
    />
    <span class="sr-only">{m.toggleTheme()}</span>
  </Button>
  <Button
    onclick={switchLanguage}
    variant="outline"
    size="icon"
    class="uppercase"
  >
    {language.current}
    <span class="sr-only">{m.toggleLanguage()}</span>
  </Button>
</div>
