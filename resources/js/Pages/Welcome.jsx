import { Head, Link } from '@inertiajs/react';

export default function Welcome({ laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-gray-900">
                <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
                    <h1 className="text-3xl font-bold mb-4">Dollin Donuts</h1>
                    <p className="text-gray-600 mb-8">
                        Template Laravel Breeze berhasil dibersihkan. Silakan mulai koding sistem login custom kamu dari sini.
                    </p>

                    <div className="flex flex-col gap-4">
                        <Link href="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition">
                            Ke Halaman Login (Buat Nanti)
                        </Link>
                        <Link href="/register" className="bg-white border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 font-medium py-2 rounded-lg transition">
                            Ke Halaman Register (Buat Nanti)
                        </Link>
                    </div>
                </div>

                <footer className="mt-8 text-sm text-gray-500">
                    Laravel v{laravelVersion} (PHP v{phpVersion})
                </footer>
            </div>
        </>
    );
}
