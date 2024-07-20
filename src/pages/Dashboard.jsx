import { useState } from 'react';
import { Modal, Input, Button, Form, ConfigProvider, message } from 'antd';
import { Header, FamilyTree } from '../components/index';
import { Theme } from '../themes/index';

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      setConfirmLoading(true);
      // create family tree

    }).catch((errorInfo) => {

    });
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Header />
      <ConfigProvider theme={Theme.antDesignCustomTheme}>
        <Modal title="Family Tree Name" open={open} onOk={handleOk} okText='Create' confirmLoading={confirmLoading} onCancel={handleCancel} centered okButtonProps={{ type: 'default', htmlType: 'submit' }} cancelButtonProps={{ type: 'default' }} className='border rounded-lg border-textColor' >
          <Form form={form} layout="vertical" onFinish={handleOk} >
            <Form.Item name="familyTreeName" rules={[{ required: true, message: 'Family Tree Name is required' }, { whitespace: true, message: 'Family Tree Name cannot be empty' }]} >
              <Input placeholder="Enter family tree name" />
            </Form.Item>
          </Form>
        </Modal>
      </ConfigProvider>
      <div className='min-h-dvh flex flex-col justify-center items-center text-center py-20 bg-bgColor relative text-white'>
        <div><h1 className='text-xl'>No Family Tree</h1></div>
        <div style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))' }} className='h-full w-full justify-center items-center text-center place-items-center grid gap-6 px-12 '>

          <FamilyTree familyTreeName={'Chayan Mulewa'} />
          <FamilyTree familyTreeName={'Chayan Mulewa'} />
          <FamilyTree familyTreeName={'Chayan Mulewa'} />
          <FamilyTree familyTreeName={'Chayan Mulewa'} />
          <FamilyTree familyTreeName={'Chayan Mulewa'} />
          <FamilyTree familyTreeName={'Chayan Mulewa'} />

        </div>
        <div className='h-12 w-12 fixed bottom-4 right-4 rounded-full'>
          <button onClick={showModal} className="h-full w-full relative group flex justify-center items-center text-center border rounded-sm border-textColor bg-bgColor text-black overflow-hidden" >
            <div className='absolute z-10 transition-all duration-300 w-8 h-1 rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-inherit group-hover:bg-white'></div>
            <div className='absolute z-10 transition-all duration-300 w-1 h-8 rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-inherit group-hover:bg-white'></div>
            <span className="absolute inset-0 transition-all duration-300 transform translate-x-0 translate-y-0 group-hover:-translate-x-full group-hover:-translate-y-full bg-textColor"></span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
