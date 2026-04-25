<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $branchId = $user->branch_id;

        // Daily Revenue
        $todayRevenue = Order::where('branch_id', $branchId)
            ->whereDate('created_at', Carbon::today())
            ->sum('total');

        // Yesterday Revenue (for percentage calculation)
        $yesterdayRevenue = Order::where('branch_id', $branchId)
            ->whereDate('created_at', Carbon::yesterday())
            ->sum('total');

        $revenueChange = 0;
        if ($yesterdayRevenue > 0) {
            $revenueChange = (($todayRevenue - $yesterdayRevenue) / $yesterdayRevenue) * 100;
        } else if ($todayRevenue > 0) {
            $revenueChange = 100; // 100% increase if yesterday was 0
        }

        // Total Orders (All time or today? Usually dashboard shows today's summary or overall. Let's do all time for "Total Orders" label but maybe specific to branch)
        $totalOrders = Order::where('branch_id', $branchId)->count();

        // Pending Orders
        $pendingOrdersCount = Order::where('branch_id', $branchId)
            ->where('status', 'pending')
            ->count();

        // Recent Orders
        $recentOrders = Order::where('branch_id', $branchId)
            ->orderBy('created_at', 'desc')
            ->limit(10)
            ->get();

        return Inertia::render('admin/dashboard', [
            'todayRevenue' => (int)$todayRevenue,
            'revenueChange' => round($revenueChange, 1),
            'totalOrders' => $totalOrders,
            'pendingOrdersCount' => $pendingOrdersCount,
            'recentOrders' => $recentOrders,
        ]);
    }
}
