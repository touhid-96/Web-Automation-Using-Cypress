import LoginPage from "../pages/loginPage";
import MakeAppointment from "../pages/MakeAppointmentPage";

describe("User makes an appointment", () => {
	const loginPage = new LoginPage();
	const makeAppointment = new MakeAppointment();

	beforeEach(() => {
		loginPage.KuraLogin();
	});

	it("Make appointment", () => {
		makeAppointment.userAppointment();
	});
});
