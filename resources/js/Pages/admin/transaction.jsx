import AdminNav from "../layouts/admin_nav";
import { Head } from "@inertiajs/react";

function Transaction() {
    return (
        <>
            <Head>
                <title>Riwayat Transaksi</title>
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Be+Vietnam+Pro:wght@300;400;500;600&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            </Head>

            <style>{`
                body {
                    background-color: #fef6e7;
                    color: #322e25;
                    font-family: 'Be Vietnam Pro', sans-serif;
                    -webkit-font-smoothing: antialiased;
                }
                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                    vertical-align: middle;
                }
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #f8f0e0; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #dcd4c0; border-radius: 10px; }
            `}</style>

            <main className="pt-12 pb-12 px-6 md:px-12 max-w-7xl mx-auto space-y-10">
                {/* Header Section */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-1">
                        <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-primary tracking-tight">Riwayat Transaksi</h1>
                        <p className="text-on-surface-variant font-medium">Kelola dan audit penjualan donat artisan Anda.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="px-6 py-3 bg-primary text-on-primary rounded-xl font-semibold shadow-lg hover:scale-[0.98] transition-transform flex items-center gap-2">
                            <span className="material-symbols-outlined text-[20px]" data-icon="download">download</span>
                            Ekspor CSV
                        </button>
                    </div>
                </header>

                {/* Quick Stats Bento Grid (Only 2 cards) */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-surface-container-low p-8 rounded-lg space-y-4 shadow-sm border border-outline-variant/10">
                        <div className="flex items-center justify-between">
                            <span className="text-on-surface-variant font-medium uppercase tracking-wider text-xs">Pendapatan Hari Ini</span>
                            <span className="material-symbols-outlined text-primary" data-icon="payments">payments</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold font-headline text-primary">Rp 6.390.000</span>
                            <span className="text-tertiary font-bold text-sm flex items-center">
                                <span className="material-symbols-outlined text-sm" data-icon="arrow_upward">arrow_upward</span> 8.4%
                            </span>
                        </div>
                    </div>
                    <div className="bg-surface-container-low p-8 rounded-lg space-y-4 shadow-sm border border-outline-variant/10">
                        <div className="flex items-center justify-between">
                            <span className="text-on-surface-variant font-medium uppercase tracking-wider text-xs">Jumlah Transaksi Berhasil</span>
                            <span className="material-symbols-outlined text-primary" data-icon="receipt_long">receipt_long</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold font-headline text-primary">142</span>
                            <span className="text-tertiary font-bold text-sm flex items-center">
                                <span className="material-symbols-outlined text-sm" data-icon="arrow_upward">arrow_upward</span> 12%
                            </span>
                        </div>
                    </div>
                </section>

                {/* Filters & Table Section */}
                <section className="bg-surface-container-lowest rounded-lg shadow-[0_8px_40px_rgba(50,46,37,0.06)] overflow-hidden border border-outline-variant/5">
                    {/* Filter Bar */}
                    <div className="p-6 bg-surface-container/50 border-b border-outline-variant/10 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="relative flex-1 max-w-md">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
                            <input className="w-full pl-12 pr-4 py-3 bg-surface-container-low border-none rounded-full text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Cari berdasarkan ID, Pelanggan, atau Produk..." type="text" />
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                            <div className="flex items-center bg-surface-container-low rounded-full px-4 py-2 text-sm font-medium text-on-surface gap-2 border border-outline-variant/20">
                                <span className="material-symbols-outlined text-[18px]" data-icon="calendar_today">calendar_today</span>
                                24 Okt 2023 - Hari Ini
                            </div>
                            <div className="flex items-center bg-surface-container-low rounded-full px-4 py-2 text-sm font-medium text-on-surface gap-2 border border-outline-variant/20">
                                <span className="material-symbols-outlined text-[18px]" data-icon="filter_list">filter_list</span>
                                Metode Pembayaran
                            </div>
                        </div>
                    </div>

                    {/* Table Container (Updated Columns) */}
                    <div className="overflow-x-auto custom-scrollbar">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-surface-container/30">
                                    <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant/70 font-headline">Detail Transaksi</th>
                                    <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant/70 font-headline text-center">Metode Transaksi</th>
                                    <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant/70 font-headline">Tanggal & Waktu</th>
                                    <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant/70 font-headline text-center">Status</th>
                                    <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-on-surface-variant/70 font-headline text-right">Jumlah Transaksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-outline-variant/10">
                                {/* Row 1 */}
                                <tr className="hover:bg-surface-container/10 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="font-bold text-primary mb-0.5">#TRX-98234</div>
                                        <div className="text-on-surface-variant text-sm">2x Glaze Series, 1x Espresso</div>
                                        <div className="text-[11px] text-outline mt-1 uppercase font-semibold">Annette Black</div>
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-surface-container rounded-full text-[12px] font-bold text-on-surface-variant border border-outline-variant/20">
                                            <span className="material-symbols-outlined text-[16px]" data-icon="qr_code_2">qr_code_2</span> QRIS
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-on-surface/80">24 Okt 2023, 10:45</td>
                                    <td className="px-6 py-5 text-center">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container text-xs font-bold">Berhasil</span>
                                    </td>
                                    <td className="px-6 py-5 font-bold text-primary text-right">Rp 45.000</td>
                                </tr>
                                {/* Row 2 */}
                                <tr className="hover:bg-surface-container/10 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="font-bold text-primary mb-0.5">#TRX-98235</div>
                                        <div className="text-on-surface-variant text-sm">4x Mochi Series Mix</div>
                                        <div className="text-[11px] text-outline mt-1 uppercase font-semibold">Arlene McCoy</div>
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-surface-container rounded-full text-[12px] font-bold text-on-surface-variant border border-outline-variant/20">
                                            <span className="material-symbols-outlined text-[16px]" data-icon="credit_card">credit_card</span> Kartu
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-on-surface/80">24 Okt 2023, 11:12</td>
                                    <td className="px-6 py-5 text-center">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container text-xs font-bold">Berhasil</span>
                                    </td>
                                    <td className="px-6 py-5 font-bold text-primary text-right">Rp 120.000</td>
                                </tr>
                                {/* Row 3 */}
                                <tr className="hover:bg-surface-container/10 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="font-bold text-primary mb-0.5">#TRX-98236</div>
                                        <div className="text-on-surface-variant text-sm">1x Susu Cream, 1x Iced Tea</div>
                                        <div className="text-[11px] text-outline mt-1 uppercase font-semibold">Cody Fisher</div>
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-surface-container rounded-full text-[12px] font-bold text-on-surface-variant border border-outline-variant/20">
                                            <span className="material-symbols-outlined text-[16px]" data-icon="payments">payments</span> Tunai
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-on-surface/80">24 Okt 2023, 11:45</td>
                                    <td className="px-6 py-5 text-center">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-error-container/20 text-error-dim text-xs font-bold">Gagal</span>
                                    </td>
                                    <td className="px-6 py-5 font-bold text-primary text-right">Rp 32.000</td>
                                </tr>
                                {/* Row 4 */}
                                <tr className="hover:bg-surface-container/10 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="font-bold text-primary mb-0.5">#TRX-98237</div>
                                        <div className="text-on-surface-variant text-sm">6x Signature Box</div>
                                        <div className="text-[11px] text-outline mt-1 uppercase font-semibold">Devon Lane</div>
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-surface-container rounded-full text-[12px] font-bold text-on-surface-variant border border-outline-variant/20">
                                            <span className="material-symbols-outlined text-[16px]" data-icon="qr_code_2">qr_code_2</span> QRIS
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-on-surface/80">24 Okt 2023, 12:05</td>
                                    <td className="px-6 py-5 text-center">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container text-xs font-bold">Berhasil</span>
                                    </td>
                                    <td className="px-6 py-5 font-bold text-primary text-right">Rp 185.000</td>
                                </tr>
                                {/* Row 5 */}
                                <tr className="hover:bg-surface-container/10 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="font-bold text-primary mb-0.5">#TRX-98238</div>
                                        <div className="text-on-surface-variant text-sm">2x Susu Series, 2x Matcha</div>
                                        <div className="text-[11px] text-outline mt-1 uppercase font-semibold">Bessie Cooper</div>
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-surface-container rounded-full text-[12px] font-bold text-on-surface-variant border border-outline-variant/20">
                                            <span className="material-symbols-outlined text-[16px]" data-icon="qr_code_2">qr_code_2</span> QRIS
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-on-surface/80">24 Okt 2023, 12:20</td>
                                    <td className="px-6 py-5 text-center">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container text-xs font-bold">Berhasil</span>
                                    </td>
                                    <td className="px-6 py-5 font-bold text-primary text-right">Rp 88.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="px-6 py-5 bg-surface-container/30 flex items-center justify-between border-t border-outline-variant/10">
                        <span className="text-sm font-medium text-on-surface-variant">Menampilkan 5 dari 142 transaksi</span>
                        <div className="flex items-center gap-2">
                            <button className="p-2 rounded-full hover:bg-primary/5 text-primary disabled:opacity-30" disabled>
                                <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-on-primary text-sm font-bold shadow-sm">1</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary/10 text-on-surface text-sm font-semibold">2</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary/10 text-on-surface text-sm font-semibold">3</button>
                            <button className="p-2 rounded-full hover:bg-primary/5 text-primary">
                                <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}

Transaction.layout = page => <AdminNav children={page} />;
export default Transaction;
