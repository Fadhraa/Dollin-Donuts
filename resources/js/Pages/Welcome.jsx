import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <div className="bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container font-body">
            <Head title="Dollin Donuts | Glaze & Grain">
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Be+Vietnam+Pro:wght@300;400;500;600&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
                <style>{`
                    .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
                    body { font-family: 'Be Vietnam Pro', sans-serif; }
                    h1, h2, h3, .brand-font { font-family: 'Plus Jakarta Sans', sans-serif; }
                `}</style>
            </Head>

            {/* TopNavBar */}
            <nav className="fixed top-0 w-full z-50 bg-[#fef6e7]/80 dark:bg-[#322e25]/80 backdrop-blur-xl shadow-sm dark:shadow-none">
                <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
                    <span className="text-2xl font-bold tracking-tight text-[#76543d] dark:text-[#fef6e7] brand-font">The Artisan Pâtisserie</span>
                    <div className="hidden md:flex items-center gap-8">
                        <a className="text-[#76543d] font-bold border-b-2 border-[#76543d] pb-1 body-md transition-opacity duration-300" href="#menu">Menu</a>
                        <a className="text-[#76543d]/70 dark:text-[#dcd4c0]/70 hover:text-[#76543d] body-md transition-opacity duration-300" href="#order">Order Now</a>
                        <a className="text-[#76543d]/70 dark:text-[#dcd4c0]/70 hover:text-[#76543d] body-md transition-opacity duration-300" href="#contact">Contact</a>
                    </div>
                    <div className="flex items-center gap-4">
                        {/* Tombol Login/Dashboard yang terhubung ke sistem */}
                        <Link href="/login" className="text-[#76543d] font-bold hover:opacity-80">Login</Link>
                        <button className="hover:opacity-80 transition-opacity duration-300 active:scale-95 duration-200">
                            <span className="material-symbols-outlined text-[#76543d] dark:text-[#dcd4c0]">shopping_bag</span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="z-10">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-sm font-semibold mb-6">Feeling Fluffy</span>
                        <h1 className="text-6xl md:text-7xl font-extrabold text-primary leading-[1.1] mb-6 tracking-tight">
                            Artisanal <br /> <span className="text-secondary">Dollin Donuts</span>
                        </h1>
                        <p className="text-lg text-on-surface-variant max-w-md mb-10 leading-relaxed">
                            Hand-crafted daily with premium grains and silky glazes. Experience the soft, doughy texture of the legendary Digital Pâtisserie.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a className="px-8 py-4 bg-primary text-on-primary rounded-xl font-bold text-lg hover:opacity-90 transition-all flex items-center gap-2" href="#menu">
                                Browse the Menu
                                <span className="material-symbols-outlined">arrow_downward</span>
                            </a>
                            <button className="px-8 py-4 bg-surface-container-high text-primary rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
                                <span className="material-symbols-outlined">chat</span>
                                Chat with a Baker
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary-container/30 blur-[100px] rounded-full"></div>
                        <div className="relative rounded-xl overflow-visible">
                            <img alt="Artisanal Donuts" className="w-full h-auto rounded-lg shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrQXTNQRjy9iAj6jbUyFeki3pTXgakRUi48LI64uLb4uNLHeH0gYY2xErg3Ok0fNxfrDsPfWdhcAKlNKDGJw0Z5k3hxwhLR-q9vxtuhXiDDdjYxVeGoUw3XA6wAUmptzAItE49w2j7m6ejqVNL9wNcypZmpJsdMYhe3THB_NcyJPEZT4dZIIeQMUrgCBQwc0oIqpk-TvUdcJUGJfZisvzE17pnpySODmhe7C2AM7UzbT3kLl8-_jNWE9-VNs0d6qPN3Ea4m7Wewf6L" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Menu Section */}
            <section className="py-24 px-8 bg-surface-container-low" id="menu">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-primary mb-4">Our Signature Selection</h2>
                        <p className="text-on-surface-variant">The finest textures from our bakery to your doorstep.</p>
                    </div>
                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        <button className="px-6 py-2 rounded-full bg-primary text-on-primary font-medium">All Flavors</button>
                        <button className="px-6 py-2 rounded-full bg-surface-container text-on-surface-variant hover:bg-secondary-container transition-colors font-medium">Glaze Series</button>
                        <button className="px-6 py-2 rounded-full bg-surface-container text-on-surface-variant hover:bg-tertiary-container transition-colors font-medium">Mochi Series</button>
                        <button className="px-6 py-2 rounded-full bg-surface-container text-on-surface-variant hover:bg-primary-container transition-colors font-medium">Limited Edition</button>
                    </div>
                    {/* Bento Grid Menu */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Item 1 */}
                        <div className="group bg-surface-container-lowest p-6 rounded-lg transition-all hover:shadow-lg">
                            <div className="aspect-square mb-6 overflow-hidden rounded-lg">
                                <img alt="Dollin Single Snow" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBle1UT7jo4Cy8HVsIkQPp6Rg4k_vrRNwGWwhtdeC53f6uPWEmCink5uiG9brmTROfTjrBjwbzyd3rcYOnD5cB9d3XxZw9cKUFz9dfi-JPOkHnctpsxx961y_2Y7fnvE9iI93uLl9oSKmn5VnFrCawc_amPXJs8cBXk4h0gpo-vZTBvsyeM2fHSeu2pjO9MFuCh-QHiPXN6ei5KXjETkgysg6DDyu1mxdKbSjDHtgD1rzDqLFJTM9c06cbdRGiC_Vv2extN6gf6xdHQ" />
                            </div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-primary">Dollin Single Snow</h3>
                                <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-sm font-bold">$4.50</span>
                            </div>
                            <p className="text-on-surface-variant text-sm mb-6">Our signature airy dough dusted with Madagascar vanilla snow sugar.</p>
                            <button className="w-full py-3 border border-outline-variant rounded-xl text-primary font-bold hover:bg-primary hover:text-on-primary transition-all active:scale-95">Add to Order</button>
                        </div>
                        {/* Item 2 */}
                        <div className="group bg-surface-container-lowest p-6 rounded-lg transition-all hover:shadow-lg">
                            <div className="aspect-square mb-6 overflow-hidden rounded-lg relative">
                                <div className="absolute inset-0 bg-tertiary/10 mix-blend-multiply"></div>
                                <img alt="Matcha Glaze" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr0RiIRCsH-Cr0W1Kzc9RjQpU4mCyVWmU9qe0xo71NyeyVv5dCn4IQ8LWuvfjHp68hmGsAyxW3052UUWAo1lfgGhC5fni5ZaGFQPozhc94TBgcgH8v26Uo4CkOsncJYXlNa22OH10QMOSq7UIfUKjJxygo6UZfRHNo2GGHZ2wJEwZLRy6L4PgM1pdstXl6ceJdOscGhAyj820ef-g36NLwY0FdWOYZskCqD_V-yHai9UivwWwSw-xV7IR-YymneOVcI2f0AZByMsWt" />
                            </div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-primary">Glaze Series: Matcha</h3>
                                <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-sm font-bold">$5.25</span>
                            </div>
                            <p className="text-on-surface-variant text-sm mb-6">Premium Uji Matcha glaze balanced with a hint of sea salt.</p>
                            <button className="w-full py-3 border border-outline-variant rounded-xl text-primary font-bold hover:bg-primary hover:text-on-primary transition-all active:scale-95">Add to Order</button>
                        </div>
                        {/* Item 3 */}
                        <div className="group bg-surface-container-lowest p-6 rounded-lg transition-all hover:shadow-lg">
                            <div className="aspect-square mb-6 overflow-hidden rounded-lg relative">
                                <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply"></div>
                                <img alt="Strawberry Mochi" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR6m1LOmxmAHwvmxMSHozfoFdiHjwRC9_BhZKX1A0WGXM9NtwNcNLBgkzWYbdcQqw-xCuIrhjZhDYIDPrAvooZUlqFDM92SRc6kGliCfcC1WPEkOyYjCxlrM4zxOGArffFme_RlY2ij1KnLMEF-LRVrx8tDhFuNzXasi5mpo5icY1w9l93c39221-F1z5cdoOuNzMs8xFntYbowdR-UeigvHLWpKxTZXc88W1yU--JH3mPj7efl8MPEwd_z3mXLvc70aF7Wty3T0Ig" />
                            </div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-primary">Mochi Series: Strawberry</h3>
                                <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-sm font-bold">$5.50</span>
                            </div>
                            <p className="text-on-surface-variant text-sm mb-6">The signature chewy 'pon-de-ring' texture with fresh berry glaze.</p>
                            <button className="w-full py-3 border border-outline-variant rounded-xl text-primary font-bold hover:bg-primary hover:text-on-primary transition-all active:scale-95">Add to Order</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Order Section */}
            <section className="py-24 px-8 bg-surface" id="order">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-surface-container rounded-lg p-10 md:p-16 relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold text-primary mb-8 text-center">Complete Your Order</h2>
                            <div className="mb-10 p-6 bg-surface-container-low rounded-lg">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="font-medium">1x Dollin Single Snow</span>
                                    <span>$4.50</span>
                                </div>
                                <div className="border-t border-outline-variant/30 pt-4 flex justify-between items-center font-bold text-primary">
                                    <span>Total</span>
                                    <span>$4.50</span>
                                </div>
                            </div>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider ml-1">Full Name</label>
                                        <input className="w-full p-4 bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-primary/20 placeholder:text-outline-variant" placeholder="Your Name" type="text" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider ml-1">Phone Number</label>
                                        <input className="w-full p-4 bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-primary/20 placeholder:text-outline-variant" placeholder="+1 (555) 000-0000" type="tel" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider ml-1">Delivery Address</label>
                                    <textarea className="w-full p-4 bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-primary/20 placeholder:text-outline-variant" placeholder="Enter your full street address" rows="3"></textarea>
                                </div>
                                <div className="pt-6 flex flex-col gap-4">
                                    <button className="w-full py-5 bg-primary text-on-primary rounded-xl font-bold text-xl shadow-lg shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all" type="submit">
                                        Proceed to Payment
                                    </button>
                                    <button className="w-full py-4 bg-tertiary text-on-tertiary rounded-xl font-bold flex items-center justify-center gap-3 hover:opacity-90 transition-all" type="button">
                                        <span className="material-symbols-outlined">forum</span>
                                        Chat with a Baker on WhatsApp
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full py-12 px-8 bg-[#dcd4c0] dark:bg-[#25211a] text-[#76543d] dark:text-[#fef6e7]" id="contact">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
                    <div>
                        <span className="text-lg font-bold text-[#76543d] brand-font">Dollin Donuts</span>
                        <p className="text-xs uppercase tracking-widest mt-2">Feeling Fluffy.</p>
                    </div>
                    <div className="flex justify-center gap-6">
                        <a className="text-[#76543d]/60 dark:text-[#dcd4c0]/60 hover:text-[#76543d] dark:hover:text-[#fef6e7] underline decoration-2 underline-offset-4 text-xs uppercase tracking-widest" href="#">Instagram</a>
                        <a className="text-[#76543d]/60 dark:text-[#dcd4c0]/60 hover:text-[#76543d] dark:hover:text-[#fef6e7] underline decoration-2 underline-offset-4 text-xs uppercase tracking-widest" href="#">Facebook</a>
                        <a className="text-[#76543d]/60 dark:text-[#dcd4c0]/60 hover:text-[#76543d] dark:hover:text-[#fef6e7] underline decoration-2 underline-offset-4 text-xs uppercase tracking-widest" href="#">Twitter</a>
                    </div>
                    <div className="md:text-right">
                        <p className="text-xs font-semibold">© 2026 Dollin Donuts. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}