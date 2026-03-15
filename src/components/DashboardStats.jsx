import { Card } from "antd";

const DashboardStats = ({ complaints }) => {

    const total = complaints.length;
    const pending = complaints.filter(c => c.status === "Pending").length;
    const done = complaints.filter(c => c.status === "Done").length;

    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">

            <Card className="rounded-xl !bg-gray-800 border !border-none">
                <p className="text-white font-bold text-sm">Total Complaints</p>
                <h2 className="text-2xl font-bold text-blue-600">{total}</h2>
            </Card>

            <Card className="rounded-xl !bg-gray-800 border !border-none">
                <p className="text-white font-bold text-sm">Pending</p>
                <h2 className="text-2xl font-bold text-orange-500">{pending}</h2>
            </Card>

            <Card className="rounded-xl !bg-gray-800 border !border-none">
                <p className="text-white font-bold   text-sm">Completed</p>
                <h2 className="text-2xl font-bold text-green-600">{done}</h2>
            </Card>

        </div>

    );

};

export default DashboardStats;