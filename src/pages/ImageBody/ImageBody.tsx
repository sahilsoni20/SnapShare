import Retrieve from "../../components/Download/Retrieve";
import Upload from "../../components/Upload/Upload";
import { BodyContainer } from "./Style";

export default function ImageBody() {
    return (
        <BodyContainer>
            <Upload/>
            <Retrieve/>
        </BodyContainer>
    )
}