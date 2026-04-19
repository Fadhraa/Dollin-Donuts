import AdminNav from "../layouts/admin_nav";
import { Head } from "@inertiajs/react";

function OrderManagement() {
    return (
        <>
            <Head>
                <title>Dollin Donuts Admin - Pengelolaan Pesanan</title>
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Be+Vietnam+Pro:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            </Head>

            <style>{`
                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                }
                body {
                    background-color: #fef6e7;
                    color: #322e25;
                    font-family: 'Be Vietnam Pro', sans-serif;
                }
                .header-anchor {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                }
            `}</style>

            <main className="pt-12 pb-12 px-6 md:px-10 max-w-[1600px] mx-auto">
                {/* Header Section */}
                <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight header-anchor mb-2">Pengelolaan Pesanan</h1>
                        <p className="text-on-surface-variant font-medium max-w-2xl leading-relaxed">Sistem pemantauan untuk memproses pesanan donat artisanal. Pastikan setiap glasir sempurna dan setiap pengiriman segar.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="bg-surface-container-high text-primary px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-surface-variant transition-all active:scale-95">
                            <span className="material-symbols-outlined">filter_list</span> Filter
                        </button>
                        <button className="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/20 active:scale-95">
                            <span className="material-symbols-outlined">download</span> Ekspor Laporan
                        </button>
                    </div>
                </header>

                {/* Quick Stats Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-surface-container-low p-8 rounded-lg flex items-center justify-between shadow-sm border border-outline-variant/10">
                        <div>
                            <p className="text-on-surface-variant text-sm font-semibold uppercase tracking-widest mb-1">Total Menunggu</p>
                            <h3 className="text-4xl font-extrabold text-primary header-anchor">24</h3>
                        </div>
                        <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container">
                            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>pending_actions</span>
                        </div>
                    </div>
                    <div className="bg-secondary-container p-8 rounded-lg flex items-center justify-between shadow-sm border border-outline-variant/10">
                        <div>
                            <p className="text-on-secondary-container text-sm font-semibold uppercase tracking-widest mb-1">Dalam Proses</p>
                            <h3 className="text-4xl font-extrabold text-on-secondary-container header-anchor">12</h3>
                        </div>
                        <div className="w-16 h-16 bg-on-secondary-container rounded-full flex items-center justify-center text-on-secondary">
                            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>outdoor_grill</span>
                        </div>
                    </div>
                    <div className="bg-tertiary-container p-8 rounded-lg flex items-center justify-between shadow-sm border border-outline-variant/10">
                        <div>
                            <p className="text-on-tertiary-container text-sm font-semibold uppercase tracking-widest mb-1">Selesai Hari Ini</p>
                            <h3 className="text-4xl font-extrabold text-on-tertiary-container header-anchor">89</h3>
                        </div>
                        <div className="w-16 h-16 bg-on-tertiary-container rounded-full flex items-center justify-center text-on-tertiary">
                            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        </div>
                    </div>
                </div>

                {/* Order Table Container */}
                <div className="bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden border border-outline-variant/10">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-surface-container-low">
                                    <th className="px-6 py-5 text-sm font-bold text-primary header-anchor uppercase tracking-wider">ID Pesanan</th>
                                    <th className="px-6 py-5 text-sm font-bold text-primary header-anchor uppercase tracking-wider">Pelanggan</th>
                                    <th className="px-6 py-5 text-sm font-bold text-primary header-anchor uppercase tracking-wider">Item Dipesan</th>
                                    <th className="px-6 py-5 text-sm font-bold text-primary header-anchor uppercase tracking-wider">Tanggal Pesanan</th>
                                    <th className="px-6 py-5 text-sm font-bold text-primary header-anchor uppercase tracking-wider">Total Harga</th>
                                    <th className="px-6 py-5 text-sm font-bold text-primary header-anchor uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-5 text-sm font-bold text-primary header-anchor uppercase tracking-wider text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-surface-container">
                                {/* Row 1: Bulk Order */}
                                <tr className="hover:bg-surface-bright transition-colors group">
                                    <td className="px-6 py-6 font-bold text-primary">#DON-9821</td>
                                    <td className="px-6 py-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-xs font-bold text-on-secondary-fixed">RA</div>
                                            <span className="font-semibold text-on-surface">Rian Adiwangsa</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <div className="flex flex-col gap-1 max-w-xs">
                                            <span className="inline-flex items-center gap-2 text-sm bg-surface-container-high px-3 py-1 rounded-full text-on-surface-variant font-medium">
                                                <b className="text-primary">100x</b> Dollin Single Snow
                                            </span>
                                            <span className="text-xs text-primary font-bold ml-2">+ 12 item lainnya</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 text-sm text-on-surface-variant">Oct 24, 2024 · 08:32</td>
                                    <td className="px-6 py-6 font-bold text-on-surface">Rp 2.450.000</td>
                                    <td className="px-6 py-6">
                                        <select defaultValue="proses" className="bg-secondary-container text-on-secondary-container text-xs font-bold px-4 py-2 rounded-full border-none focus:ring-2 focus:ring-secondary cursor-pointer">
                                            <option value="pending">Menunggu</option>
                                            <option value="proses">Proses</option>
                                            <option value="selesai">Selesai</option>
                                        </select>
                                    </td>
                                    <td className="px-6 py-6 text-right">
                                        <button className="p-2 text-stone-400 hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined">visibility</span>
                                        </button>
                                    </td>
                                </tr>
                                {/* Row 2: Standard Order */}
                                <tr className="hover:bg-surface-bright transition-colors group">
                                    <td className="px-6 py-6 font-bold text-primary">#DON-9820</td>
                                    <td className="px-6 py-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-xs font-bold text-on-primary-container">ML</div>
                                            <span className="font-semibold text-on-surface">Maya Lestari</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <div className="flex flex-col gap-1 max-w-xs">
                                            <span className="inline-flex items-center gap-2 text-sm bg-surface-container-high px-3 py-1 rounded-full text-on-surface-variant font-medium">
                                                <b className="text-primary">6x</b> Glazed Matcha Susu
                                            </span>
                                            <span className="inline-flex items-center gap-2 text-sm bg-surface-container-high px-3 py-1 rounded-full text-on-surface-variant font-medium">
                                                <b className="text-primary">1x</b> Artisanal Kopi Gula Aren
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 text-sm text-on-surface-variant">Oct 24, 2024 · 09:15</td>
                                    <td className="px-6 py-6 font-bold text-on-surface">Rp 185.000</td>
                                    <td className="px-6 py-6">
                                        <select defaultValue="pending" className="bg-surface-variant text-on-surface-variant text-xs font-bold px-4 py-2 rounded-full border-none focus:ring-2 focus:ring-outline cursor-pointer">
                                            <option value="pending">Menunggu</option>
                                            <option value="proses">Proses</option>
                                            <option value="selesai">Selesai</option>
                                        </select>
                                    </td>
                                    <td className="px-6 py-6 text-right">
                                        <button className="p-2 text-stone-400 hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined">visibility</span>
                                        </button>
                                    </td>
                                </tr>
                                {/* Row 3: Completed Order */}
                                <tr className="hover:bg-surface-bright transition-colors group">
                                    <td className="px-6 py-6 font-bold text-primary">#DON-9819</td>
                                    <td className="px-6 py-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-tertiary-fixed-dim flex items-center justify-center text-xs font-bold text-on-tertiary-fixed">BN</div>
                                            <span className="font-semibold text-on-surface">Budi Nugraha</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <div className="flex flex-col gap-1 max-w-xs">
                                            <span className="inline-flex items-center gap-2 text-sm bg-surface-container-high px-3 py-1 rounded-full text-on-surface-variant font-medium opacity-60">
                                                <b className="text-primary">24x</b> Dark Chocolate Fluff
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 text-sm text-on-surface-variant">Oct 24, 2024 · 07:45</td>
                                    <td className="px-6 py-6 font-bold text-on-surface">Rp 640.000</td>
                                    <td className="px-6 py-6">
                                        <select defaultValue="selesai" className="bg-tertiary-container text-on-tertiary-container text-xs font-bold px-4 py-2 rounded-full border-none focus:ring-2 focus:ring-tertiary cursor-pointer">
                                            <option value="pending">Menunggu</option>
                                            <option value="proses">Proses</option>
                                            <option value="selesai">Selesai</option>
                                        </select>
                                    </td>
                                    <td className="px-6 py-6 text-right">
                                        <button className="p-2 text-stone-400 hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined">visibility</span>
                                        </button>
                                    </td>
                                </tr>
                                {/* Row 4: Bulk Order 2 */}
                                <tr className="hover:bg-surface-bright transition-colors group">
                                    <td className="px-6 py-6 font-bold text-primary">#DON-9818</td>
                                    <td className="px-6 py-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-outline-variant flex items-center justify-center text-xs font-bold text-on-background">EH</div>
                                            <span className="font-semibold text-on-surface">Event Horizon PT</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <div className="flex flex-col gap-1 max-w-xs">
                                            <span className="inline-flex items-center gap-2 text-sm bg-surface-container-high px-3 py-1 rounded-full text-on-surface-variant font-medium">
                                                <b className="text-primary">150x</b> Susu Mochi Series
                                            </span>
                                            <span className="inline-flex items-center gap-2 text-sm bg-surface-container-high px-3 py-1 rounded-full text-on-surface-variant font-medium">
                                                <b className="text-primary">50x</b> Americano XL
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 text-sm text-on-surface-variant">Oct 23, 2024 · 18:00</td>
                                    <td className="px-6 py-6 font-bold text-on-surface">Rp 5.200.000</td>
                                    <td className="px-6 py-6">
                                        <select defaultValue="proses" className="bg-secondary-container text-on-secondary-container text-xs font-bold px-4 py-2 rounded-full border-none focus:ring-2 focus:ring-secondary cursor-pointer">
                                            <option value="pending">Menunggu</option>
                                            <option value="proses">Proses</option>
                                            <option value="selesai">Selesai</option>
                                        </select>
                                    </td>
                                    <td className="px-6 py-6 text-right">
                                        <button className="p-2 text-stone-400 hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined">visibility</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Table Pagination/Footer */}
                    <div className="px-6 py-5 bg-surface-container-low border-t border-surface-container flex items-center justify-between">
                        <span className="text-xs font-medium text-on-surface-variant">Menampilkan 4 dari 248 pesanan artisan</span>
                        <div className="flex gap-2">
                            <button className="w-8 h-8 rounded-full flex items-center justify-center border border-outline-variant text-primary hover:bg-primary hover:text-on-primary transition-all">
                                <span className="material-symbols-outlined text-sm">chevron_left</span>
                            </button>
                            <button className="w-8 h-8 rounded-full flex items-center justify-center bg-primary text-on-primary font-bold text-xs">1</button>
                            <button className="w-8 h-8 rounded-full flex items-center justify-center border border-outline-variant text-primary hover:bg-primary hover:text-on-primary transition-all font-bold text-xs">2</button>
                            <button className="w-8 h-8 rounded-full flex items-center justify-center border border-outline-variant text-primary hover:bg-primary hover:text-on-primary transition-all font-bold text-xs">3</button>
                            <button className="w-8 h-8 rounded-full flex items-center justify-center border border-outline-variant text-primary hover:bg-primary hover:text-on-primary transition-all">
                                <span className="material-symbols-outlined text-sm">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

OrderManagement.layout = page => <AdminNav children={page} />;
export default OrderManagement;
