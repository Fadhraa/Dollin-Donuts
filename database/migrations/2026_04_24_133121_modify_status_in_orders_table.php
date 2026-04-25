<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            // Kita hapus kolom status yang lama agar tidak membingungkan
            $table->dropColumn('status');

            // Tambahkan kolom-kolom baru
            $table->string('payment_status')->default('pending')->after('total');
            $table->string('order_status')->default('new')->after('payment_status');
            $table->string('payment_method')->nullable()->after('order_status');
            $table->string('midtrans_transaction_id')->nullable()->after('payment_method');
        });
    }

    public function down(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->string('status')->default('pending');
            $table->dropColumn(['payment_status', 'order_status', 'payment_method', 'midtrans_transaction_id']);
        });
    }
};
