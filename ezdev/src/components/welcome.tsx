

const WelcomeMessage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full p-4">
            <h1 className="text-3xl font-bold text-center mb-4">
                Welcome to EZdev!
            </h1>
            <p className="text-lg text-center mb-6">
                Your one-stop solution for all development tools and resources.
            </p>
            <a
                href="/tools"
                className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
            >
                Explore Tools
            </a>
        </div>
    );
}

export default WelcomeMessage;