function AdminModal({clickBtn}){
    return(
        <div className="col-12 col-xl-10 vh-100 animated fadeInDown" style={{backgroundColor: "rgba(0,0,0,0.1)", position: "fixed"}}>
       <div
        class="animated fadeInDown"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={()=>clickBtn(false)}

              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">Are you sure you want to delete?</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                onClick={()=>clickBtn(false)}
              >
                cancel
              </button>
              <button type="button" class="btn btn-primary">
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}
export default AdminModal;