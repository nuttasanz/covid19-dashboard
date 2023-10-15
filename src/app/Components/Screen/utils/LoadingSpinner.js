const LoadingSpinner = () => {
    return (
        <>
            <div className="w-full h-full bg-black absolute z-[999] flex items-center justify-center">
                <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
            </div>
        </>
    )
}

export default LoadingSpinner