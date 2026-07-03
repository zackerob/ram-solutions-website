from fastapi import APIRouter

from app.schemas.contact import ContactRequest, ContactResponse
from app.services import contact as contact_service

router = APIRouter()


@router.post("", response_model=ContactResponse)
async def submit_contact(payload: ContactRequest) -> ContactResponse:
    await contact_service.handle_submission(payload)
    return ContactResponse()
