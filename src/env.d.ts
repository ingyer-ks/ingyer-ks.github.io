/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_PROBLEMS_BASE_URL?: string;
  readonly PUBLIC_ADOBE_CLIENT_ID_LOCAL?: string;
  readonly PUBLIC_ADOBE_CLIENT_ID_PROD?: string;
  readonly PUBLIC_SUPABASE_URL?: string;
  readonly PUBLIC_SUPABASE_PUBLISHABLE_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
