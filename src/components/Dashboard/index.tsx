import Summary from "../Summary";
import TransactionsTable from "../TransactionsTable/Index";
import { Container } from "./styles";


export default function Dashboard() {
    return (
        <Container>
            <Summary/>
            <TransactionsTable/>
        </Container>
    )
}
