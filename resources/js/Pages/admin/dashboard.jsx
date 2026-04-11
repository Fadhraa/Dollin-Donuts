import { Link } from "@inertiajs/react";

export default function Dashboard(props) {
    console.log(props);
    const user = props.auth.user;
    return (
        <div className="relative bg-background text-on-background antialiased selection:bg-primary-container">
            <div className="absolute top-0 right-0 p-8">
                <Link href="/logout"
                method="post"
                as="button"
                 className="
                text-on-background tracking-wider font-bold text-lg border-2 border-primary rounded-md px-4 py-2
                hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 ease-in-out
                 ">Logout</Link>
            </div>
            <div className="pt-24 pb-12 px-8 max-w-7xl mx-auto h-screen">
                <h1 className="text-4xl font-bold text-on-surface mb-1 tracking-wide">Dashboard Admin</h1>
                <p className="text-base text-on-surface mb-8">Selamat Datang, {user.name} silahkan pantau penjualan dan stok</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-surface-container-high p-6 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-bold text-on-surface mb-4">Penjualan</h2>
                        <p className="text-4xl font-bold text-primary">Rp 100.000</p>
                    </div>
                    <div className="bg-surface-container-high p-6 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-bold text-on-surface mb-4">Stok</h2>
                        <p className="text-4xl font-bold text-primary">100</p>
                    </div>
                    <div className="bg-surface-container-high p-6 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-bold text-on-surface mb-4">Pelanggan</h2>
                        <p className="text-4xl font-bold text-primary">100</p>
                    </div>
                </div>
            </div>
        </div>
    );
}