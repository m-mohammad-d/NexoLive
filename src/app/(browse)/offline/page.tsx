export default function OfflinePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-center p-6">
      <div className="max-w-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          You're offline
        </h1>
        <p className="text-gray-600 mb-8">
          It seems you’re not connected to the internet. Don’t worry — you can
          still access pages you’ve already visited.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="rounded-xl bg-primary px-6 py-3 font-medium text-white shadow hover:bg-green-600 transition-colors"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
