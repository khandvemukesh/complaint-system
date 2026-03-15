import { Table, Button, Space, Tag } from "antd";
import { Trash2, UserPen, MessageCircle } from "lucide-react";
import moment from "moment";

const ComplaintTable = ({ data, onEdit, onDelete }) => {

    const sendWhatsApp = (record) => {

        const message = `
Customer Name: ${record.name}
Customer Phone: ${record.phone}
Complaint: ${record.complaint}
Date: ${moment(record.date).format("YYYY-MM-DD")}
Time: ${moment(record.time).format("HH:mm")}
Address: ${record.address}
Status: ${record.status}
`;

        const encodedMessage = encodeURIComponent(message);

        const url = `https://wa.me/${record.technician}?text=${encodedMessage}`;

        window.open(url, "_blank");

    };

    const columns = [

        {
            title: "Customer",
            dataIndex: "name",
        },

        {
            title: "Phone",
            dataIndex: "phone",
            responsive: ["sm"]
        },

        {
            title: "Complaint",
            dataIndex: "complaint",
            responsive: ["md"]
        },

        {
            title: "Date",
            dataIndex: "date",
            render: (date) => moment(date).format("YYYY-MM-DD"),
            responsive: ["md"]
        },

        {
            title: "Time",
            dataIndex: "time",
            render: (time) => moment(time).format("HH:mm"),
            responsive: ["lg"]
        },

        {
            title: "Status",
            dataIndex: "status",
            render: (status) => (
                <Tag color={status === "Done" ? "green" : "orange"}>
                    {status}
                </Tag>
            )
        },

        {
            title: "Action",
            render: (_, record) => (

                <Space>

                    <Button
                        type="text"
                        onClick={() => sendWhatsApp(record)}
                        className="!text-green-500 hover:!text-green-600 !p-1"
                    >
                        <MessageCircle size={16} label="Whatsapps" />
                    </Button>

                    <Button
                        type="text"
                        onClick={() => onEdit(record)}
                        className="hover:!text-blue-500 !p-1"
                    >
                        <UserPen size={16} />
                    </Button>

                    <Button
                        danger
                        type="text"
                        onClick={() => onDelete(record.key)}
                        className="!p-1"
                    >
                        <Trash2 size={16} />
                    </Button>

                </Space>

            )
        }

    ];

    return (

        <div className="w-full overflow-x-auto ">

            <Table
                columns={columns}
                dataSource={data}
                rowKey="key"
                pagination={{ pageSize: 5 }}
                scroll={{ x: "max-content" }}
                className="min-w-[700px] !bg-gray-800 !text-white rounded-xl !text-sm"
            />

        </div>

    );

};

export default ComplaintTable;