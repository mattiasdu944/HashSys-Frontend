import { titleFont } from "@/config/fonts";
import { LoginForm } from '../../../modules/auth';

export default function LoginPage() {
    return (
        <div className="container bg-white px-4 py-8 rounded-md backdrop-blur-sm md:bg-transparent  md:p-0 ">
            <div className="mb-8">
                <h1 className={`${titleFont.className}`}>Bienvenido de vuelta!</h1>
                <p>
                    Bienvenido al sistema, ingresa tus credenciales para ingresar al sistema
                </p>
            </div>

            <LoginForm/>
        </div>
    );
}