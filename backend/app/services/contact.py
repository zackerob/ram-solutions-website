import logging

from app.core.config import settings
from app.schemas.contact import ContactRequest

logger = logging.getLogger(__name__)


async def handle_submission(submission: ContactRequest) -> None:
    """Process a contact-form submission.

    Default behavior logs the submission so nothing is silently dropped.
    Wire real delivery here as a follow-up (SMTP to settings.contact_email,
    a transactional email provider like Resend, or a Supabase table).
    """
    logger.info(
        "Contact submission for %s from %s <%s>: %s",
        settings.contact_email,
        submission.name,
        submission.email,
        submission.message,
    )
