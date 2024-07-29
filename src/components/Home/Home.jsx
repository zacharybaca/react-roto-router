import logo from "../../assets/mario-plumbing.jpg";
import "./home.css";

export default function Home() {
    return (
        <div id="home-container">
            <h1>Welcome To Mario Bros Plumbing Services</h1>

            <table>
                <thead>
                    <tr>
                        <th scope="col">Service</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Drain Cleaning</th>
                        <td>$150.00</td>
                        <td>If your sink is backing up with water, or has a slow drain; this may be the service for you!</td>
                    </tr>
                    <tr>
                        <th scope="row">Water Heater Repair</th>
                        <td>$350.00</td>
                        <td>If you noticed that your showers are not as hot as they used to be; you may need a new water heater.</td>
                    </tr>
                    <tr>
                        <th scope="row">Sewer Repair</th>
                        <td>$400.00</td>
                        <td>If you start smelling unpleasant odors coming from your drains, you may need this service!</td>
                    </tr>
                </tbody>
            </table>
            <img src={logo} alt="logo" />
        </div>
    )
}