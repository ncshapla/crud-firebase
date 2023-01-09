/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const ModalForm = ({ handleBlur, handleSubmit, updateEdit, handleEdit, single, setSingle }) => {
  return (
    <div>
      {/* add new modal */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div className="border bg-slate-700 flex items-center justify-center rounded">
            <form className="w-full px-4" onSubmit={handleSubmit}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-lg text-white font-bold">
                    Name
                  </span>
                </label>

                <input
                  type="text"
                  name="peopleName"
                  placeholder=""
                  className="input input-bordered w-full"
                  onBlur={handleBlur}
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-lg text-white font-bold">
                    Blood group
                  </span>
                </label>

                <input
                  type="text"
                  name="bloodGrp"
                  placeholder=""
                  className="input input-bordered w-full"
                  onBlur={handleBlur}
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text  text-lg text-white font-bold">
                    Area
                  </span>
                </label>

                <input
                  type="text"
                  placeholder=""
                  name="areaName"
                  className="input input-bordered w-full"
                  onBlur={handleBlur}
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-lg text-white font-bold">
                    Mobile
                  </span>
                </label>

                <input
                  type="text"
                  name="mobileNum"
                  placeholder=""
                  className="input input-bordered w-full"
                  onBlur={handleBlur}
                  required
                />
              </div>

              <div className="text-lg my-5">
                <label className="label">
                  <span className="label-text text-lg text-white font-bold">
                    Status
                  </span>
                </label>

                <div className="flex">
                  <select
                    onClick={handleBlur}
                    required
                    name="status"
                    id="status"
                    className="rounded font-bold font-sans px-4 w-[60%]"
                  >
                    <option value="Available">Available</option>
                    <option value="Rest">Rest</option>
                  </select>

                  <button
                    type="submit"
                    // eslint-disable-next-line no-restricted-globals
                    onClick={() => location.reload()}
                    className=" bg-green-800 rounded-xl p-3 text-white font-bold mx-4 w-[30%]"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </label>
      </label>

      {/* edit modal */}

      <div className="modal" id="my-modal-2">
        <div className="modal-box relative">
          <div className="border bg-slate-700 flex items-center justify-center rounded">
            <form className="w-full px-4" onSubmit={updateEdit}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-lg text-white font-bold">
                  </span>
                </label>

                <input
                  type="text"
                  name="peopleName"
                  defaultValue={single && single.peopleName}
                  className="input input-bordered w-full"
                  onBlur={handleEdit}
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-lg text-white font-bold">
                    Blood group
                  </span>
                </label>

                <input
                  type="text"
                  name="bloodGrp"
                  defaultValue={single && single.bloodGrp}
                  className="input input-bordered w-full"
                  onBlur={handleEdit}
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text  text-lg text-white font-bold">
                    Area
                  </span>
                </label>

                <input
                  type="text"
                  defaultValue={single && single.areaName}
                  name="areaName"
                  className="input input-bordered w-full"
                  onBlur={handleEdit}
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-lg text-white font-bold">
                    Mobile
                  </span>
                </label>

                <input
                  type="text"
                  name="mobileNum"
                  defaultValue={single && single.mobileNum}
                  className="input input-bordered w-full"
                  onBlur={handleEdit}
                  required
                />
              </div>

              <div className="text-lg my-5">
                <label className="label">
                  <span className="label-text text-lg text-white font-bold">
                    Status
                  </span>
                </label>

                <div className="flex">
                  <select
                    onClick={handleEdit}
                    required
                    defaultValue={single && single.status}
                    name="status"
                    id="status"
                    className="rounded font-bold font-sans px-4 w-[60%]"
                  >
                    <option value="Available">Available</option>
                    <option value="Rest">Rest</option>
                  </select>

                  <button
                    type="submit"
                    // eslint-disable-next-line no-restricted-globals
                    onClick={() => location.reload()}
                    className=" bg-green-800 rounded-xl p-3 text-white font-bold mx-4 w-[30%]"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="moda absolute top-0 right-0 ">
            <a href="#" className="btn bg-red-500 border-none rounded-full px-4">
              X
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
