import { useState, useCallback, useEffect } from 'react';
import { Order, MenuItem, initialOrders, generateOrderId, getRandomCustomerName, cafeMenuItems } from '@/utils/mockData';

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [isSimulating, setIsSimulating] = useState(true);

  // Simulate new orders appearing randomly
  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      // 30% chance of new order every 10 seconds
      if (Math.random() < 0.3) {
        const newOrder = generateRandomOrder();
        setOrders(prev => [newOrder, ...prev]);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [isSimulating]);

  const generateRandomOrder = useCallback((): Order => {
    // Random number of items (1-3)
    const numItems = Math.floor(Math.random() * 3) + 1;
    const items: Array<{ menuItem: MenuItem; quantity: number }> = [];

    // Pick random available menu items
    const availableItems = cafeMenuItems.filter(item => item.available);
    for (let i = 0; i < numItems; i++) {
      const randomItem = availableItems[Math.floor(Math.random() * availableItems.length)];
      const quantity = Math.floor(Math.random() * 2) + 1;
      items.push({ menuItem: randomItem, quantity });
    }

    const total = items.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);

    return {
      id: generateOrderId(),
      tableNumber: Math.floor(Math.random() * 10) + 1,
      customerName: getRandomCustomerName(),
      items,
      status: 'new',
      total,
      timestamp: new Date(),
    };
  }, []);

  const updateOrderStatus = useCallback((orderId: string, newStatus: Order['status']) => {
    setOrders(prev =>
      prev.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  }, []);

  const addOrder = useCallback((order: Omit<Order, 'id' | 'timestamp'>) => {
    const newOrder: Order = {
      ...order,
      id: generateOrderId(),
      timestamp: new Date(),
    };
    setOrders(prev => [newOrder, ...prev]);
    return newOrder;
  }, []);

  const deleteOrder = useCallback((orderId: string) => {
    setOrders(prev => prev.filter(order => order.id !== orderId));
  }, []);

  const getOrdersByStatus = useCallback((status: Order['status']) => {
    return orders.filter(order => order.status === status);
  }, [orders]);

  const getTodayStats = useCallback(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayOrders = orders.filter(order => order.timestamp >= today);
    const completedOrders = todayOrders.filter(order => order.status === 'completed');

    const totalRevenue = completedOrders.reduce((sum, order) => sum + order.total, 0);
    const averageOrderValue = completedOrders.length > 0 ? totalRevenue / completedOrders.length : 0;

    return {
      totalOrders: todayOrders.length,
      completedOrders: completedOrders.length,
      totalRevenue,
      averageOrderValue,
      pendingOrders: todayOrders.filter(order => order.status !== 'completed').length,
    };
  }, [orders]);

  const toggleSimulation = useCallback(() => {
    setIsSimulating(prev => !prev);
  }, []);

  return {
    orders,
    updateOrderStatus,
    addOrder,
    deleteOrder,
    getOrdersByStatus,
    getTodayStats,
    isSimulating,
    toggleSimulation,
  };
}
