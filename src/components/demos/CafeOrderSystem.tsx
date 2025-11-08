import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useOrders } from '@/hooks/useOrders';
import { cafeMenuItems, MenuItem, formatCurrency, Order } from '@/utils/mockData';
import {
  Clock,
  ChefHat,
  CheckCircle2,
  Archive,
  Plus,
  Edit,
  Trash2,
  TrendingUp,
  DollarSign,
  ShoppingBag,
  Users,
  LayoutGrid,
  Play,
  Pause,
} from 'lucide-react';

export function CafeOrderSystem() {
  const { orders, updateOrderStatus, deleteOrder, getTodayStats, isSimulating, toggleSimulation } = useOrders();
  const [selectedStatus, setSelectedStatus] = useState<Order['status'] | 'all'>('all');
  const [menuFilter, setMenuFilter] = useState<string>('all');

  const stats = getTodayStats();

  const filteredOrders = selectedStatus === 'all'
    ? orders
    : orders.filter(order => order.status === selectedStatus);

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'new': return 'bg-blue-500';
      case 'preparing': return 'bg-yellow-500';
      case 'ready': return 'bg-green-500';
      case 'completed': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'new': return <Clock size={16} />;
      case 'preparing': return <ChefHat size={16} />;
      case 'ready': return <CheckCircle2 size={16} />;
      case 'completed': return <Archive size={16} />;
    }
  };

  const filteredMenu = menuFilter === 'all'
    ? cafeMenuItems
    : cafeMenuItems.filter(item => item.category === menuFilter);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <Tabs defaultValue="orders" className="w-full">
        <div className="flex items-center justify-between mb-6">
          <TabsList>
            <TabsTrigger value="orders">
              <ShoppingBag className="mr-2" size={16} />
              Orders
            </TabsTrigger>
            <TabsTrigger value="menu">
              <LayoutGrid className="mr-2" size={16} />
              Menu
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <TrendingUp className="mr-2" size={16} />
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Simulation Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Live Demo:</span>
            <Button
              variant={isSimulating ? 'default' : 'outline'}
              size="sm"
              onClick={toggleSimulation}
            >
              {isSimulating ? (
                <>
                  <Pause className="mr-2" size={14} />
                  Pause Orders
                </>
              ) : (
                <>
                  <Play className="mr-2" size={14} />
                  Resume Orders
                </>
              )}
            </Button>
            {isSimulating && (
              <Badge variant="outline" className="animate-pulse">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 inline-block" />
                Live
              </Badge>
            )}
          </div>
        </div>

        {/* Orders Tab */}
        <TabsContent value="orders" className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Today's Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatCurrency(stats.totalRevenue)}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stats.completedOrders} completed orders
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                <ShoppingBag className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalOrders}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stats.pendingOrders} pending
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Avg Order Value</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatCurrency(stats.averageOrderValue)}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Per transaction
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Tables</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {orders.filter(o => o.status !== 'completed' && o.tableNumber).length}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Tables serving
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Order Status Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[
              { value: 'all', label: 'All Orders', count: orders.length },
              { value: 'new', label: 'New', count: orders.filter(o => o.status === 'new').length },
              { value: 'preparing', label: 'Preparing', count: orders.filter(o => o.status === 'preparing').length },
              { value: 'ready', label: 'Ready', count: orders.filter(o => o.status === 'ready').length },
              { value: 'completed', label: 'Completed', count: orders.filter(o => o.status === 'completed').length },
            ].map(status => (
              <Button
                key={status.value}
                variant={selectedStatus === status.value ? 'default' : 'outline'}
                onClick={() => setSelectedStatus(status.value as any)}
                className="whitespace-nowrap"
              >
                {status.label}
                <Badge variant="secondary" className="ml-2">
                  {status.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Orders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredOrders.map(order => (
              <Card key={order.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-base">{order.id}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {order.tableNumber ? `Table ${order.tableNumber}` : 'Takeaway'}
                      </p>
                    </div>
                    <Badge className={`${getStatusColor(order.status)} text-white`}>
                      <span className="flex items-center gap-1">
                        {getStatusIcon(order.status)}
                        {order.status}
                      </span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {/* Customer */}
                  <div>
                    <p className="text-sm font-medium">{order.customerName}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(order.timestamp).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>

                  {/* Order Items */}
                  <div className="space-y-1">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {item.quantity}x {item.menuItem.name}
                        </span>
                        <span className="font-medium">
                          {formatCurrency(item.menuItem.price * item.quantity)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="pt-2 border-t flex justify-between font-bold">
                    <span>Total</span>
                    <span className="text-primary">{formatCurrency(order.total)}</span>
                  </div>

                  {/* Status Actions */}
                  <div className="space-y-2 pt-2">
                    {order.status === 'new' && (
                      <Button
                        size="sm"
                        className="w-full"
                        onClick={() => updateOrderStatus(order.id, 'preparing')}
                      >
                        <ChefHat className="mr-2" size={14} />
                        Start Preparing
                      </Button>
                    )}
                    {order.status === 'preparing' && (
                      <Button
                        size="sm"
                        className="w-full"
                        onClick={() => updateOrderStatus(order.id, 'ready')}
                      >
                        <CheckCircle2 className="mr-2" size={14} />
                        Mark as Ready
                      </Button>
                    )}
                    {order.status === 'ready' && (
                      <Button
                        size="sm"
                        className="w-full"
                        onClick={() => updateOrderStatus(order.id, 'completed')}
                      >
                        <Archive className="mr-2" size={14} />
                        Complete Order
                      </Button>
                    )}
                    {order.status === 'completed' && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full"
                        onClick={() => deleteOrder(order.id)}
                      >
                        <Trash2 className="mr-2" size={14} />
                        Remove
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredOrders.length === 0 && (
            <div className="text-center py-12">
              <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No orders found</h3>
              <p className="text-muted-foreground">
                {selectedStatus === 'all' ? 'No orders yet' : `No ${selectedStatus} orders`}
              </p>
            </div>
          )}
        </TabsContent>

        {/* Menu Management Tab */}
        <TabsContent value="menu" className="space-y-6">
          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {['all', 'Makanan', 'Minuman', 'Snack', 'Dessert'].map(category => (
              <Button
                key={category}
                variant={menuFilter === category ? 'default' : 'outline'}
                onClick={() => setMenuFilter(category)}
                className="whitespace-nowrap"
              >
                {category === 'all' ? 'All Items' : category}
                <Badge variant="secondary" className="ml-2">
                  {category === 'all'
                    ? cafeMenuItems.length
                    : cafeMenuItems.filter(item => item.category === category).length}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredMenu.map(item => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="text-4xl mb-2">{item.image}</div>
                    <div className="flex gap-1">
                      <Button size="icon" variant="ghost" className="h-8 w-8">
                        <Edit size={14} />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-8 w-8 text-red-500">
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-base">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">{item.description}</p>

                  <div className="flex items-center justify-between pt-2">
                    <span className="font-bold text-primary text-lg">{formatCurrency(item.price)}</span>
                    <Badge variant={item.available ? 'default' : 'secondary'}>
                      {item.available ? 'Available' : 'Unavailable'}
                    </Badge>
                  </div>

                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                    {item.popular && (
                      <Badge variant="destructive" className="text-xs">
                        Popular
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add New Item Button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="fixed bottom-8 right-8 rounded-full shadow-lg h-14 w-14">
                <Plus size={24} />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Menu Item</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Item Name</label>
                  <Input placeholder="e.g., Nasi Goreng Special" />
                </div>
                <div>
                  <label className="text-sm font-medium">Category</label>
                  <Input placeholder="e.g., Makanan" />
                </div>
                <div>
                  <label className="text-sm font-medium">Price (IDR)</label>
                  <Input type="number" placeholder="25000" />
                </div>
                <div>
                  <label className="text-sm font-medium">Description</label>
                  <Input placeholder="Brief description..." />
                </div>
                <Button className="w-full">Add Menu Item</Button>
              </div>
            </DialogContent>
          </Dialog>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Revenue Chart Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-around gap-2">
                  {[65, 78, 45, 89, 92, 76, 88].map((height, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                      <div
                        className="w-full bg-primary rounded-t hover:bg-primary/80 transition-colors cursor-pointer"
                        style={{ height: `${height}%` }}
                      />
                      <span className="text-xs text-muted-foreground">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][idx]}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Items */}
            <Card>
              <CardHeader>
                <CardTitle>Top Selling Items</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {cafeMenuItems.filter(item => item.popular).map((item, idx) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-sm">{formatCurrency(item.price)}</p>
                      <p className="text-xs text-muted-foreground">~50 orders</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
