import { Form, Input, DatePicker, TimePicker, Select, Button } from "antd";
import moment from "moment";

const ComplaintForm = ({ onSubmit, form, editing }) => {

    return (

        <Form
            form={form}
            layout="vertical"
            onFinish={onSubmit}
            initialValues={{
                date: moment(),
                time: moment(),
                status: "Pending"
            }}
        >

            <div className="grid grid-cols-1 md:grid-cols-1 !text-white font-bold">

                <Form.Item
                    name="name"
                    label={<span className="!text-white font-semibold">Customer Name</span>}
                    rules={[{ required: true }]}
                    
                >
                    <Input placeholder="Enter customer name" />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label={<span className="!text-white font-semibold">Customer Phone</span>}
                    rules={[{ required: true }]}
                >
                    <Input placeholder="Enter phone number" />
                </Form.Item>

                <Form.Item
                    name="date"
                    label={<span className="!text-white font-semibold">Date</span>}     
                    rules={[{ required: true }]}
                >
                    <DatePicker className="w-full" />
                </Form.Item>

                <Form.Item
                    name="time"
                    label={<span className="!text-white font-semibold">Time</span>}
                    rules={[{ required: true }]}
                >
                    <TimePicker className="w-full" />
                </Form.Item>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-1">

                <Form.Item
                    name="technician"
                    label={<span className="!text-white font-semibold">Technician Mobile</span>}
                    rules={[{ required: true }]}
                >
                    <Input placeholder="Technician WhatsApp number" />
                </Form.Item>

                <Form.Item
                    name="status"
                    label={<span className="!text-white font-semibold">Status</span>}
                >
                    <Select
                        options={[
                            { value: "Pending", label: "Pending" },
                            { value: "Done", label: "Done" }
                        ]}
                    />
                </Form.Item>

            </div>

            <Form.Item
                name="complaint"
                label={<span className="!text-white font-semibold">Complaint</span>}
                rules={[{ required: true }]}
            >
                <Input.TextArea rows={3} placeholder="Complaint details" />
            </Form.Item>

            <Form.Item
                name="address"
                label={<span className="!text-white font-semibold">Address</span>}
            >
                <Input.TextArea rows={2} placeholder="Customer address" />
            </Form.Item>

            <Button
                type="primary"
                htmlType="submit"
                className="w-full mt-2 !bg-gray-600 hover:bg-gray-900"
            >
                {editing ? "Update Complaint" : "Add Complaint"}
            </Button>

        </Form>

    );

};

export default ComplaintForm;