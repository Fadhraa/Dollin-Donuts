import AdminNav from "../layouts/admin_nav";
import { Head } from "@inertiajs/react";

function Orders() {
    return (
        <>
            <Head>
                <title>Manajemen Pesanan</title>
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Be+Vietnam+Pro:wght@300;400;500;600&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            </Head>

            <style>{`
                .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
                body { background-color: #fef6e7; font-family: 'Be Vietnam Pro', sans-serif;}
                h1, h2, h3, .brand-logo { font-family: 'Plus Jakarta Sans', sans-serif; }
            `}</style>

            <main className="flex-grow px-8 py-10 max-w-[1920px] mx-auto w-full text-on-surface">
                {/* Dashboard Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-extrabold text-primary mb-8 tracking-tight brand-logo">Manajemen Pesanan</h1>

                    {/* Revenue Summary Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-surface-container-low p-6 rounded-lg shadow-sm border border-outline-variant/10 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-on-surface-variant mb-1">Pendapatan Hari Ini</p>
                                <p className="text-3xl font-bold text-primary">Rp 4.285.500</p>
                            </div>
                            <div className="h-12 w-12 bg-primary-container rounded-full flex items-center justify-center">
                                <span className="material-symbols-outlined text-on-primary-container">payments</span>
                            </div>
                        </div>
                        <div className="bg-surface-container-low p-6 rounded-lg shadow-sm border border-outline-variant/10 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-on-surface-variant mb-1">Pesanan Diproses</p>
                                <p className="text-3xl font-bold text-primary">124</p>
                            </div>
                            <div className="h-12 w-12 bg-secondary-container rounded-full flex items-center justify-center">
                                <span className="material-symbols-outlined text-on-secondary-container">shopping_bag</span>
                            </div>
                        </div>
                        <div className="bg-surface-container-low p-6 rounded-lg shadow-sm border border-outline-variant/10 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-on-surface-variant mb-1">Pesanan</p>
                                <p className="text-3xl font-bold text-primary">18</p>
                            </div>
                            <div className="h-12 w-12 bg-tertiary-container rounded-full flex items-center justify-center">
                                <span className="material-symbols-outlined text-on-tertiary-container">local_shipping</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Order Table Container */}
                <div className="bg-surface shadow-[0_4px_30px_rgba(50,46,37,0.04)] rounded-lg overflow-hidden border border-outline-variant/10">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-surface-container-high/50 text-on-surface-variant font-medium text-sm">
                                    <th className="px-8 py-5">Detail Pesanan</th>
                                    <th className="px-6 py-5">Item Dibeli</th>
                                    <th className="px-6 py-5">Tanggal & Waktu</th>
                                    <th className="px-6 py-5">Status</th>
                                    <th className="px-6 py-5">Total Tagihan</th>
                                    <th className="px-8 py-5 text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-outline-variant/10">
                                {/* Row 1 */}
                                <tr className="hover:bg-surface-container-low transition-colors group">
                                    <td className="px-8 py-6">
                                        <div>
                                            <p className="font-bold text-primary text-base brand-logo">mochi choco</p>
                                            <p className="text-xs text-on-surface-variant font-mono">#ORD-2024-8841</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <div className="flex -space-x-3 overflow-hidden">
                                            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-surface object-cover" alt="donut 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY4QQD3cM1hrcjgdP0YPeO_CyaYr5a8kvbRvvKXkBIybaO7DUTT_IoaeyaiWzVNVX80ZQNyO_86M8dQ2YaWSQvARDKOz5yaf_59eszEqXwcYUGC_vpIZ6aE_NRYAso_gFzg9faYgbF2fJD5sjf1ZbDykMmwvdJ77GV_QgzUlJ-t9UzGeDwt8aftCYY3ZfUTPtnnUtQI-KRVd34271GmNJk3-GBQGbwYgmskY2rXN4JESOYLqa7bvseY1A_foSzCGs5U7JOkbw3I3j_" />
                                            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-surface object-cover" alt="donut 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDT2wvBc7QWoFCxo1NskK693tQE_a1VjPg1_ZI4kZ5AYzxxdxyFQfdPpdt_Bz8Of6SYlJiA9zfCShnbvgtNYkzbPPoliqf4gExx_6mLsEz6_0cETAvDGggrf6mAdbGwLgNKoqeEcZiWMgp9brfbpvHpAhYzUSWe3Og30DIfqb8swD7XlGv6Uaaa_TsXaj47Gd1EVfqJOeH7ASvChWCC_TG6bIKZJaaVopNYW_ec8CLxY2aLw80ghpsWe7oK0ZMvl-Mdk0Qt6mU4qUf" />
                                            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-highest ring-2 ring-surface text-[10px] font-bold text-on-surface-variant">+2</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <div className="text-sm">
                                            <p className="font-medium">Oct 24, 2023</p>
                                            <p className="text-on-surface-variant text-xs">02:45 PM</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-tertiary-container text-on-tertiary-container border border-tertiary/10">Selesai</span>
                                    </td>
                                    <td className="px-6 py-6">
                                        <p className="font-bold text-primary">Rp 42.000</p>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <button className="p-2 hover:bg-primary-container/20 rounded-full text-primary transition-all">
                                            <span className="material-symbols-outlined">visibility</span>
                                        </button>
                                    </td>
                                </tr>
                                {/* Row 2 */}
                                <tr className="hover:bg-surface-container-low transition-colors group">
                                    <td className="px-8 py-6">
                                        <div>
                                            <p className="font-bold text-primary text-base brand-logo">donat matcha</p>
                                            <p className="text-xs text-on-surface-variant font-mono">#ORD-2024-8842</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <div className="flex overflow-hidden">
                                            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-surface object-cover" alt="mochi donut" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNAzOiZs0chcOwYXvyXJZLomDviVXMx_TXSMSz7aZIvU7afIeVAUVljuuRk3kPs44grHOgUlRiSKMyjnG8R5jIJA3x4IIHeKl_evbXD5V367p1XTT-okHFpn5rT42sSyrJoMyNBasqWQOjPahY3FI6g-y1dF_246qJRxQErbIF5xfTgi5PZzKeadHcvokO10A9QTUiOa4pDaH0w0cMQYst3bdWcLa59E5RQKZvn3Wfk7FXA_GOS4Lt6Mepr6-AUTXF5I0In9UVdt8f" />
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <div className="text-sm">
                                            <p className="font-medium">Oct 24, 2023</p>
                                            <p className="text-on-surface-variant text-xs">03:12 PM</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-container text-on-primary-container border border-primary/10">Diproses</span>
                                    </td>
                                    <td className="px-6 py-6">
                                        <p className="font-bold text-primary">Rp 18.500</p>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <button className="p-2 hover:bg-primary-container/20 rounded-full text-primary transition-all">
                                            <span className="material-symbols-outlined">visibility</span>
                                        </button>
                                    </td>
                                </tr>
                                {/* Row 3 */}
                                <tr className="hover:bg-surface-container-low transition-colors group">
                                    <td className="px-8 py-6">
                                        <div>
                                            <p className="font-bold text-primary text-base brand-logo">paket hemat</p>
                                            <p className="text-xs text-on-surface-variant font-mono">#ORD-2024-8843</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <div className="flex -space-x-3 overflow-hidden">
                                            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-surface object-cover" alt="choc donut" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx2LJu9UESMyQ40sp0qRLbp-2qyjyjApmspFi0YSSrqSDWuPuMUrGScXS0-leDruu1XSXyh7_6IfzZ9hQ9Xr60e9HFqYEvs7Jk-BT6eBH5AzuffCgmPB3ZiDN6WbvNq7fNd21sO3AJLSdzjen9Y_QtOJoeWT4919mGHRHa_GrfOtKjQGuW8tC0mET2sX_eTOXf2MLC5aaebm5nR-5n8W-lHjkN44IfT46iHObgma58OJEGS4ywk21k1NbYdYWmRRtQdHIEeheLq207" />
                                            <img className="inline-block h-10 w-10 rounded-full ring-2 ring-surface object-cover" alt="vanilla donut" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRiuB_OJ0ZUXcvdnMclusds-Uvmv6nU6maVX11zvd06rFFvwveGm1GlHQOfGr0DgjC-pbzkQ3fkfTcj0VWCb1fv26tDnmFDIwYfdBoTJ5pfFzRrKQ3oNq-QLzxK7e8tF2C4DqZjXRFEjk1b-PkAeNTqwY56n4gQzl1SMn5f3J6N6os8YhUVp9ALbGadj08fAW9q2b0lW2o1tfNNMcO4TFr8EmZ3MDxUhBx41LFvwtZ1hovnIJrD6V8N6blMHlMaXhkGcqSlgl9F_8l" />
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <div className="text-sm">
                                            <p className="font-medium">Oct 24, 2023</p>
                                            <p className="text-on-surface-variant text-xs">03:30 PM</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary-container text-on-secondary-container border border-secondary/10">Menunggu</span>
                                    </td>
                                    <td className="px-6 py-6">
                                        <p className="font-bold text-primary">Rp 26.000</p>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <button className="p-2 hover:bg-primary-container/20 rounded-full text-primary transition-all">
                                            <span className="material-symbols-outlined">visibility</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination */}
                    <div className="px-8 py-6 bg-surface-container-low flex items-center justify-between border-t border-outline-variant/10">
                        <p className="text-sm text-on-surface-variant">Menampilkan <span className="font-semibold">1 hingga 10</span> dari <span className="font-semibold">124</span> hasil</p>
                        <div className="flex items-center gap-2">
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface border border-outline-variant/20 hover:bg-primary-container/10 transition-all text-on-surface-variant">
                                <span className="material-symbols-outlined text-lg">chevron_left</span>
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-on-primary font-bold shadow-md shadow-primary/20">1</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface border border-outline-variant/20 hover:bg-primary-container/10 transition-all">2</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface border border-outline-variant/20 hover:bg-primary-container/10 transition-all">3</button>
                            <span className="px-2 text-on-surface-variant">...</span>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface border border-outline-variant/20 hover:bg-primary-container/10 transition-all">13</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface border border-outline-variant/20 hover:bg-primary-container/10 transition-all text-on-surface-variant">
                                <span className="material-symbols-outlined text-lg">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

Orders.layout = page => <AdminNav children={page} />;
export default Orders;
