
const page = () => {
    return (
        <>
            <div className="contact">
                <h1 className="Contactheading">CONTACT ME</h1>
                <form>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="mb-4">
                                <label className="form-label">Name</label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="mb-4">
                                <label className="form-label">Email</label>
                                <input type="email" class="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-4 pb-4">
                        <label className="form-label">Message</label>
                        <textarea className="form-control"  rows="5"></textarea>
                    </div>
                    <div className="resumebtn text-center pt-4">
                        <button type="button" className="btn">SEND MESSAGE</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default page
