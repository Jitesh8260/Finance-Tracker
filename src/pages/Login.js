import { useState } from "react";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (data.token) {
            localStorage.setItem("token", data.token);
            alert("Login Successful!");
        } else {
            alert(data.msg);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="email" name="email" placeholder="Email" onChange={handleChange} className="border p-2" />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} className="border p-2" />
                <button type="submit" className="bg-green-500 text-white p-2">Login</button>
            </form>
        </div>
    );
};

export default Login;
