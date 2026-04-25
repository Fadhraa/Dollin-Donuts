import { Link } from "@inertiajs/react";
import AdminNav from "../layouts/admin_nav";

function Dashboard({ auth, todayRevenue, revenueChange, totalOrders, pendingOrdersCount, recentOrders }) {
    console.log({ todayRevenue, revenueChange, totalOrders, pendingOrdersCount, recentOrders });
    const user = auth.user;
    
    return (
        <>
        <div className="relative bg-background text-on-background antialiased selection:bg-primary-container min-h-screen">
            <div className="p-8 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-on-surface mb-1 tracking-wide">Dashboard Admin {user.branch?.nama}</h1>
                <p className="text-base text-on-surface mb-8">Selamat Datang, {user.name} silahkan pantau penjualan dan stok</p>
                {/* content main */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div className="md:col-span-2 bg-primary-container p-8 rounded-lg relative overflow-hidden group">
                        <div className="relative z-10">
                            <span className="text-on-surface-variant text-sm font-medium">Pendapatan Hari Ini</span>
                            <h3 className="text-5xl font-extrabold text-on-primary-container mb-2">Rp {todayRevenue.toLocaleString('id-ID')}</h3>
                            <div className={`flex items-center gap-2 font-bold mt-4 ${revenueChange >= 0 ? 'text-primary' : 'text-red-500'}`}>
                                <span className="material-symbols-outlined ">{revenueChange >= 0 ? 'trending_up' : 'trending_down'}</span>
                                <span className="">{revenueChange}% dari kemarin</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-surface-container-low p-8 rounded-lg flex flex-col justify-between">
                        <div>
                            <span className="text-on-surface-variant font-semibold text-xs uppercase mb-1 block">Total Pesanan</span>
                            <div className="text-4xl font-bold text-primary">{totalOrders}</div>
                        </div>
                        <div className="flex items-center gap-2 text-tertiary text-sm font-medium">
                            <span className="material-symbols-outlined text-sm">shopping_cart</span>
                            <span>{pendingOrdersCount} pending pickup</span>
                        </div>
                    </div>
                    <div className="bg-secondary-container p-8 rounded-lg flex flex-col justify-between relative overflow-hidden">
                        <div>
                            <span className="text-on-secondary-container font-semibold text-xs uppercase mb-1 block">Status Toko</span>
                            <div className="text-xl font-bold text-on-secondary-container">{user.branch?.nama || 'N/A'}</div>
                        </div>
                        <div className="bg-on-secondary-container/10 p-2 rounded-md text-xs font-bold text-on-secondary-container self-start">
                            OPERATIONAL
                        </div>
                    </div>

                </div>
                <section className="bg-surface-container-lowest p-8 rounded-lg w-full">
                    <h2 className="text-2xl font-bold text-on-surface mb-4">Pesanan Terbaru</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-on-surface-variant/10">
                                    <th className="px-8 py-4 text-left text-on-surface-variant font-semibold">ID Pesanan</th>
                                    <th className="px-8 py-4 text-left text-on-surface-variant font-semibold">Nama Pelanggan</th>
                                    <th className="px-8 py-4 text-left text-on-surface-variant font-semibold">Total</th>
                                    <th className="px-8 py-4 text-left text-on-surface-variant font-semibold">Status</th>
                                    <th className="px-8 py-4 text-left text-on-surface-variant font-semibold">Waktu</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {recentOrders.length > 0 ? recentOrders.map((order) => (
                                    <tr key={order.id} className="text-on-surface-variant text-xs uppercase tracking-widest font-bold hover:bg-surface-container-low transition-colors">
                                        <td className="px-8 py-4">{order.id_pesanan}</td>
                                        <td className="px-8 py-4">{order.nama}</td>
                                        <td className="px-8 py-4">Rp {order.total.toLocaleString('id-ID')}</td>
                                        <td className="px-8 py-4">
                                            <span className={`px-2 py-1 rounded-full text-[10px] ${order.status === 'pending' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="px-8 py-4 text-[10px]">{new Date(order.created_at).toLocaleString('id-ID')}</td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="5" className="px-8 py-8 text-center text-on-surface-variant italic">Belum ada pesanan terbaru</td>
                                    </tr>
                                )}
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