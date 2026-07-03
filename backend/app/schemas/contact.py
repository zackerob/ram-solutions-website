from pydantic import BaseModel, Field, field_validator


class ContactRequest(BaseModel):
    """A contact-form submission from the website."""

    name: str = Field(min_length=1, max_length=120)
    # Kept as a plain str (with light validation) to avoid the extra
    # email-validator dependency; the frontend also enforces type="email".
    email: str = Field(min_length=3, max_length=254)
    message: str = Field(min_length=1, max_length=5000)

    @field_validator("name", "email", "message")
    @classmethod
    def _strip(cls, v: str) -> str:
        return v.strip()

    @field_validator("email")
    @classmethod
    def _looks_like_email(cls, v: str) -> str:
        if "@" not in v or "." not in v.split("@")[-1]:
            raise ValueError("invalid email address")
        return v


class ContactResponse(BaseModel):
    status: str = "ok"
