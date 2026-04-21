<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;


class OrderController extends Controller
{
    // Controller order
    public function store(Request $request)
    {
        // 1. Validasi input
        $request->validate([
            'id_pesanan' => 'required|unique:orders',
            'nama' => 'required',
            'cart' => 'required|array'
        ]);
        // 2. Simpan Data Induk
        $order = Order::create([
            'id_pesanan' => $request->id_pesanan,
            'nama' => $request->nama,
            'nohp' => $request->nohp,
            'alamat' => $request->alamat,
            'total' => $request->total,
        ]);
        // 3. Simpan Detail Item (Looping dari Cart)
        foreach ($request->cart as $item) {
            OrderItem::create([
                'order_id' => $order->id,
                'product_id' => $item['id'],
                'qty' => $item['qty'],
                'harga' => $item['harga'],
                'tipe' => $item['type'],
                'isi_paket' => $item['type'] === 'paket' ? $item['contents'] : null,
            ]);
        }
        return redirect()->route('main')->with('success', 'Pesanan berhasil dibuat!');
    }
}
