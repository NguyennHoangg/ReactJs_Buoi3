import { useState } from "react";

export default function Form() {
    const [info, setInfo] = useState<{
        name: string;
        email: string;
        age: number | "";
    }>({
        name: "",
        email: "",
        age: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setInfo(prev => ({
            ...prev,
            [name]: name === "age" ? Number(value) || "" : value
        }));
    };

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(info);
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                maxWidth: "400px",
                margin: "40px auto",
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                fontFamily: "Arial, sans-serif"
            }}
        >
            <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}>
                    Họ tên
                </label>
                <input
                placeholder="name"
                    type="text"
                    name="name"
                    value={info.name}
                    onChange={handleChange}
                    style={{
                        width: "100%",
                        padding: "8px",
                        borderRadius: "4px",
                        border: "1px solid #ccc"
                    }}
                />
            </div>

            <div style={{ marginBottom: "15px" }}>
                <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}>
                    Email
                </label>
                <input
                    type="email"
                    placeholder="email"
                    name="email"
                    value={info.email}
                    onChange={handleChange}
                    style={{
                        width: "100%",
                        padding: "8px",
                        borderRadius: "4px",
                        border: "1px solid #ccc"
                    }}
                />
            </div>

            <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}>
                    Age
                </label>
                <input
                placeholder="age"
                    type="number"
                    name="age"
                    value={info.age}
                    onChange={handleChange}
                    style={{
                        width: "100%",
                        padding: "8px",
                        borderRadius: "4px",
                        border: "1px solid #ccc"
                    }}
                />
            </div>

            <button
                type="submit"
                style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#4f46e5",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    fontWeight: "bold",
                    cursor: "pointer"
                }}
            >
                Submit
            </button>
        </form>

    );
}
