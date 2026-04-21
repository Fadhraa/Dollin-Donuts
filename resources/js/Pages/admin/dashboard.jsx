import { Link } from "@inertiajs/react";
import AdminNav from "../layouts/admin_nav";
function Dashboard(props) {
    console.log(props);
    const user = props.auth.user;
    const branch = props.auth.branch;
    return (
        <>
        <div className="relative bg-background text-on-background antialiased selection:bg-primary-container min-h-screen">

            <div className="p-8 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-on-surface mb-1 tracking-wide">Dashboard Admin {user.branch.nama}</h1>
                <p className="text-base text-on-surface mb-8">Selamat Datang, {user.name} silahkan pantau penjualan dan stok</p>
                {/* content main */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div className="md:col-span-2 bg-primary-container p-8 rounded-lg relative overflow-hidden group">
                        <div className="relative z-10">
                            <span className="text-on-surface-variant text-sm font-medium">Pendapatan Hari Ini</span>
                            <h3 className="text-5xl font-extrabold text-on-primary-container mb-2">Rp 1.000.000</h3>
                            <div className="flex items-center gap-2 text-primary font-bold mt-4">
                                <span className="material-symbols-outlined ">trending_up</span>
                                <span className="">10% dari kemarin</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className="bg-surface-container-low p-8 rounded-lg flex flex-col justify-between">
                        <div>
                            <span className="text-on-surface-variant font-semibold text-xs uppercase mb-1 block">Total Orders</span>
                            <div className="text-4xl font-bold text-primary">142</div>
                        </div>
                        <div className="flex items-center gap-2 text-tertiary text-sm font-medium">
                            <span className="material-symbols-outlined text-sm">shopping_cart</span>
                            <span>24 pending pickup</span>
                        </div>
                    </div>
                    <div className="bg-secondary-container p-8 rounded-lg flex flex-col justify-between relative overflow-hidden">
                        <div>
                            <span className="text-on-secondary-container font-semibold text-xs uppercase mb-1 block">Kitchen Status</span>
                            <div className="text-xl font-bold text-on-secondary-container">Mochi Series Batch #04</div>
                        </div>
                        <div className="bg-on-secondary-container/10 p-2 rounded-md text-xs font-bold text-on-secondary-container self-start">
                            IN OVEN - 08:14 Left
                        </div>
                    </div>

                </div>
                <section className="bg-surface-container-lowest p-8 rounded-lg w-full">
                    <h2 className="text-2xl font-bold text-on-surface mb-4">Pesanan Terbaru</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-on-surface-variant/10">
                                    <th className="px-8 py-2 text-left text-on-surface-variant font-semibold">No</th>
                                    <th className="px-8 py-2 text-left text-on-surface-variant font-semibold">Nama</th>
                                    <th className="px-8 py-2 text-left text-on-surface-variant font-semibold">Total</th>
                                    <th className="px-8 py-2 text-left text-on-surface-variant font-semibold">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                <tr className="text-on-surface-variant text-xs uppercase tracking-widest font-bold">
                                    <td className="px-8 py-4">1</td>
                                    <td className="px-8 py-4">John Doe</td>
                                    <td className="px-8 py-4">Rp 100.000</td>
                                    <td className="px-8 py-4">Pending</td>
                                </tr>
                                <tr className="text-on-surface-variant text-xs uppercase tracking-widest font-bold">
                                    <td className="px-8 py-4">1</td>
                                    <td className="px-8 py-4">John Doe</td>
                                    <td className="px-8 py-4">Rp 100.000</td>
                                    <td className="px-8 py-4">Pending</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
        </>
        
    );


}
    Dashboard.layout = page => <AdminNav children={page} />
    export default Dashboard;