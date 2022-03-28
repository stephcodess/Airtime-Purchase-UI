import Button from "../../../components/customButton/button";
import Input from "../../../components/input/input";
import AdminSidebarComponent from "../components/sidebar";
import "./style.css";

const CreatePost = () => {
  return (
    <div className="col-12 d-flex flex-row">
        <AdminSidebarComponent />
      <div className="col-12" style={{ marginTop: 100 }}>
        <div className="create-post-header col-11 col-sm-10 col-md-6 m-auto">
          <h4>Create post</h4>
          <div>
            <div className="mb-4">
              <Input
                borderBottom="1px solid rgba(0,0,0,0.2)"
                title="Title"
                borderColor="rgba(0,0,0,0.5)"
                placeholder="Enter Post Title"
                br={5}
                height={65}
              />
            </div>
            <div className="mb-4">
              <Input
                borderBottom="1px solid rgba(0,0,0,0.2)"
                title="Title"
                borderColor="rgba(0,0,0,0.5)"
                placeholder="Enter Post Title"
                br={5}
                height={65}
              />
            </div>
            <div className="mb-4 post-image">
              <div>
                <Input
                  borderBottom="1px solid rgba(0,0,0,0.2)" type="file" height={250} />
              </div>
            </div>
            <div className="mb-4">
              <Input
                borderBottom="1px solid rgba(0,0,0,0.2)"
                title="Title"
                borderColor="rgba(0,0,0,0.5)"
                placeholder="Enter Post Title"
                br={5}
                height={65}
              />
            </div>
            <Button
              title="Create Post"
              className="bg-success text-white"
              height={45}
              mt={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
