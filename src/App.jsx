import { useState, useEffect } from "react";
import { Row, Col, Card, Form, Input } from "antd";
import ComplaintForm from "./components/ComplaintForm";
import ComplaintTable from "./components/ComplaintTable";
import DashboardStats from "./components/DashboardStats";
import { exportToExcel } from "./utils/exportExcel";
import { Button } from "antd";
import { Download } from "lucide-react";
import moment from "moment";

const App = () => {

  const [form] = Form.useForm();

  const [complaints, setComplaints] = useState([]);

  const [editing, setEditing] = useState(null);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("complaints")) || [];
    setComplaints(stored);
  }, []);

  const saveData = (data) => {
    setComplaints(data);
    localStorage.setItem("complaints", JSON.stringify(data));
  };

  const handleSubmit = (values) => {

    let updated;

    if (editing) {

      updated = complaints.map(c =>
        c.key === editing.key ? { ...editing, ...values } : c
      );

      setEditing(null);

    } else {

      const newComplaint = {
        key: Date.now(),
        ...values
      };

      updated = [...complaints, newComplaint];

    }

    saveData(updated);

    form.resetFields();

  };

  const handleDelete = (key) => {
    const updated = complaints.filter(c => c.key !== key);
    saveData(updated);
  };

  const handleEdit = (record) => {
    setEditing(record);

    form.setFieldsValue({
      ...record,
      date: record.date ? moment(record.date) : null,
      time: record.time ? moment(record.time) : null
    });
  };

  const filtered = complaints.filter(c =>
    c.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="min-h-screen p-5 bg-gray-100">
      <div className="w-10/12 mx-auto ">
        <h1 className="text-2xl !sm:text-xs font-bold mb-5 mt-2">Complaint Management System</h1>

        <DashboardStats complaints={complaints} />
        <Col xs={24} md={24} className="mt-5">

          <Card
            title={<span className="font-semibold text-green-700">Complaint Records</span>} className="!border border-none"
            extra={
              <Button onClick={() => exportToExcel(complaints)}>
                <Download size={18} />Export Excel
              </Button>
            }
          >

            <Input
              placeholder="Search Customer"
              style={{ marginBottom: 10 }}
              onChange={(e) => setSearch(e.target.value)}
            />

            <ComplaintTable
              data={filtered}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />

          </Card>

        </Col>
        <Col xs={24} md={24} className="mt-5">

          <Card title={<span className="font-semibold text-blue-600">Complaint Form</span>}
            className="!border border-none">

            <ComplaintForm
              form={form}
              onSubmit={handleSubmit}
              editing={editing}
            />

          </Card>

        </Col>





      </div>
    </div>
  );

}

export default App;