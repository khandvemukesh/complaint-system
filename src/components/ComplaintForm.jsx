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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <Form.Item
                    name="name"
                    label={<span className="font-semibold">Customer Name</span>}
                    rules={[{ required: true }]}
                    
                >
                    <Input placeholder="Enter customer name" />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label={<span className="font-semibold">Customer Phone</span>}
                    rules={[{ required: true }]}
                >
                    <Input placeholder="Enter phone number" />
                </Form.Item>

                <Form.Item
                    name="date"
                    label={<span className="font-semibold">Date</span>}     
                    rules={[{ required: true }]}
                >
                    <DatePicker className="w-full" />
                </Form.Item>

                

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Form.Item
                    name="time"
                    label={<span className="font-semibold">Time</span>}
                    rules={[{ required: true }]}
                >
                    <TimePicker className="w-full" />
                </Form.Item>
                <Form.Item
                    name="technician"
                    label={<span className="font-semibold">Technician Mobile</span>}
                    rules={[{ required: true }]}
                >
                    <Input placeholder="Technician WhatsApp number" />
                </Form.Item>

                <Form.Item
                    name="status"
                    label={<span className="font-semibold">Status</span>}
                >
                    <Select
                        options={[
                            { value: "Pending", label: "Pending" },
                            { value: "Done", label: "Done" }
                        ]}
                    />
                </Form.Item>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
                name="complaint"
                label={<span className="font-semibold">Complaint</span>}
                rules={[{ required: true }]}
            >
                <Input.TextArea rows={3} placeholder="Complaint details" />
            </Form.Item>

            <Form.Item
                name="address"
                label={<span className="font-semibold">Address</span>}
            >
                <Input.TextArea rows={3} placeholder="Customer address" />
            </Form.Item>
            </div>
            <Button
                type="primary"
                htmlType="submit"
                className="w-fit mt-2 !bg-blue-600 hover:bg-blue-800"
            >
                {editing ? "Update Complaint" : "Add Complaint"}
            </Button>

        </Form>

    );

};

export default ComplaintForm;