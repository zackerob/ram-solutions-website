from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_env: str = "development"
    # Dev default so the app boots without a .env; Render sets a real one
    # (render.yaml → SECRET_KEY generateValue).
    secret_key: str = "dev-secret-change-me"
    host: str = "127.0.0.1"
    port: int = 8000
    # Plain str — pydantic-settings would JSON-decode a list[str] field before validators run.
    allowed_origins: str = "http://localhost:5173"

    # ─── Contact form delivery ──────────────────────────────────────────────
    # Where contact submissions are addressed. Delivery is logged by default;
    # wire real email/SMTP (or a Supabase table) as a follow-up.
    contact_email: str = "robertsamsolutions@gmail.com"

    # ─── Optional integrations (unused by default; kept for future features) ─
    database_url: str = ""
    supabase_url: str = ""
    supabase_service_role_key: str = ""
    storage_bucket: str = "uploads"
    anthropic_api_key: str = ""
    anthropic_model: str = "claude-sonnet-4-6"

    log_level: str = "INFO"

    model_config = {"env_file": "../.env"}


settings = Settings()
