interface CustomerInfoProps {
  customerInfo: {
    name: string;
    email: string;
  };
  setCustomerInfo: (info: { name: string; email: string; }) => void;
}

export const CustomerInfo = ({ customerInfo, setCustomerInfo }: CustomerInfoProps) => {
  return (
    <div className="bg-gray-800/50 p-4 rounded-lg">
      <h3 className="text-white font-medium mb-4">お客様情報</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-300 text-sm mb-1">お名前</label>
          <input 
            type="text"
            value={customerInfo.name}
            onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
            className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"
            placeholder="山田 太郎"
          />
        </div>
        
        <div>
          <label className="block text-gray-300 text-sm mb-1">メールアドレス</label>
          <input 
            type="email"
            value={customerInfo.email}
            onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
            className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"
            placeholder="example@email.com"
          />
        </div>
      </div>
    </div>
  );
};