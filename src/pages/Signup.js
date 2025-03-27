import { useState } from "react";

const Signup = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:5000/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        alert(data.msg);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl font-semibold mb-4">Signup</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" placeholder="Name" onChange={handleChange} className="border p-2" />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} className="border p-2" />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} className="border p-2" />
                <button type="submit" className="bg-blue-500 text-white p-2">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
