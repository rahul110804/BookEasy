const Login = () => {
    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form className="space-y-4">
                <input type="email" placeholder="Email" className="w-full p-2 border" />
                <input type="password" placeholder="Password" className="w-full p-2 border" />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 w-full">Login</button>
            </form>
        </div>
    );
};

export default Login;
