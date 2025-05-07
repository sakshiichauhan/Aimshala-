import Calender from "./Calender";
import MediaUpload from "./MediaUpload";
import Thank from "./Thank";
import VerifyForm from "./VerifyForm";

export default function ConsultantVerificationInPerson() {
    return (
        <div>
            <VerifyForm />
            <MediaUpload />
            <Calender />
            <Thank />
        </div>
    );
}