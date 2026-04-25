<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class WebhookController extends Controller
{
    public function handler(Request $request)
    {
        // 1. Ambil data notifikasi dari Midtrans
        $serverKey = env('MIDTRANS_SERVER_KEY');
        $orderId = $request->order_id;
        $statusCode = $request->status_code;
        $grossAmount = $request->gross_amount;
        $signatureKey = $request->signature_key;
        $transactionStatus = $request->transaction_status;

        // 2. Verifikasi Keamanan (Pastikan notifikasi ini benar-benar dari server Midtrans)
        // Midtrans menggunakan enkripsi SHA512 dari gabungan beberapa data
        $mySignature = hash('sha512', $orderId . $statusCode . $grossAmount . $serverKey);

        if ($mySignature !== $signatureKey) {
            return response()->json(['message' => 'Invalid Signature. Akses Ditolak!'], 403);
        }

        // 3. Update Status di Database sesuai informasi dari Midtrans
        if ($transactionStatus == 'capture' || $transactionStatus == 'settlement') {
            // Jika pembayaran berhasil
            DB::table('orders')->where('id_pesanan', $orderId)->update([
                'payment_status' => 'success',
                'payment_method' => $request->payment_type,
                'midtrans_transaction_id' => $request->transaction_id
            ]);
        } else if ($transactionStatus == 'expire' || $transactionStatus == 'cancel' || $transactionStatus == 'deny') {
            // Jika pembayaran dibatalkan atau kedaluwarsa
            DB::table('orders')->where('id_pesanan', $orderId)->update([
                'payment_status' => 'failed',
                'payment_method' => $request->payment_type,
                'midtrans_transaction_id' => $request->transaction_id
            ]);
        }

        return response()->json(['message' => 'Notifikasi berhasil diproses oleh Laravel']);
    }
}
