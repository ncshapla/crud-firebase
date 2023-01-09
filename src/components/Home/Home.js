/* eslint-disable no-restricted-globals */
import { initializeApp } from "firebase/app";
import {
  child,
  get,
  getDatabase,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import firebaseConfig from "../firebase.config";
import ModalForm from "./ModalForm";

const Home = () => {
  // ----------- firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  // ----------- states
  const [single, setSingle] = useState();
  console.log("🚀 ~ file: Home.js:24 ~ Home ~ single", single)
  const [people, setPeople] = useState({
    peopleName: " ",
    bloodGrp: " ",
    areaName: " ",
    mobileNum: " ",
    status: " ",
  });
  // all people data state
  const [data, setData] = useState([]); 



  


  //-------------- create or write user -----------------------
  const writeUserData = (peopleName, bloodGrp, areaName, mobileNum, status) => {
    const u_id = uuidv4();
    set(ref(db, `people/${u_id}`), {
      peopleName: peopleName,
      bloodGrp: bloodGrp,
      areaName: areaName,
      mobileNum: mobileNum,
      status: status,
      uid: u_id,
    });
  };
  // user create form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    writeUserData(
      people.peopleName,
      people.bloodGrp,
      people.areaName,
      people.mobileNum,
      people.status
    );
  };
  //  taking data from input
  const handleBlur = (e) => {
    const sp = { ...people };
    if (e.target.name === "peopleName") {
      sp.peopleName = e.target.value.toLowerCase();

      setPeople(sp);
    } else if (e.target.name === "bloodGrp") {
      sp.bloodGrp = e.target.value.toLowerCase();
      setPeople(sp);
    } else if (e.target.name === "areaName") {
      sp.areaName = e.target.value.toLowerCase();
      setPeople(sp);
    } else if (e.target.name === "status") {
      sp.status = e.target.value.toLowerCase();
      setPeople(sp);
    } else {
      sp.mobileNum = e.target.value;
      setPeople(sp);
    }
  };

  //-------------- read / get all people data -----------------------

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `people`))
      .then((snapshot) => {
        const arr = [];

        if (snapshot.exists()) {
          const object = snapshot.val();
          for (const key in object) {
            arr.push(object[key]);
          }

          setData(arr);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // get single people data
  const getSingleData = (uid) => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `people/${uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const object = snapshot.val();
          setSingle(object);

          // setData(arr);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // --------- update -----------------
  const updateEdit = () => {
    update(ref(db, `people/${single.uid}`), single)
      .then((res) => {
        console.log("res: ", res);
      })
      .catch((error) => {
        console.log("err", error);
      });
  };
  // edit single people
  const handleEdit = (e) => {
    const sp = { ...single };
    if (e.target.name === "peopleName") {
      sp.peopleName = e.target.value.toLowerCase();
      setSingle(sp);
    } else if (e.target.name === "bloodGrp") {
      sp.bloodGrp = e.target.value.toLowerCase();
      setSingle(sp);
    } else if (e.target.name === "areaName") {
      sp.areaName = e.target.value.toLowerCase();
      setSingle(sp);
    } else if (e.target.name === "status") {
      sp.status = e.target.value.toLowerCase();
      setSingle(sp);
    } else {
      sp.mobileNum = e.target.value;
      setSingle(sp);
    }
  };

  // ------------------- delete data ----------------
  const handleDlt = (e) => {
    remove(ref(db, "people/" + e)).then(() => {
      console.log(e.mobileNum);
    });
    location.reload();
  };

  return (
    <div>
      {/* table */}
      <div className="overflow-x-auto">
        <button className="btn btn-danger my-3">
          <label htmlFor="my-modal-4">Add new</label>
        </button>
        <table className=" text-start table table-compact border-y-4 w-full border-solid border-x-2 rounded">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th className="text-start">Name</th>
              <th className="text-start">Blood group</th>
              <th className="text-start">Area</th>
              <th className="text-start">Mobile</th>
              <th className="text-start">Status</th>
              <th className="text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((x, i) => {
                return (
                  <tr key={i} className="capitalize">
                    <td>
                      <div className="flex justify-start items-center">
                        <div className=" uppercase px-3 py-2 m-2 rounded-full bg-slate-300">
                          {x.peopleName.match(/\b(\w)/g)}
                        </div>
                        <div className="capitalize">{x.peopleName}</div>
                      </div>
                    </td>
                    <td>{x.bloodGrp}</td>
                    <td>{x.areaName}</td>
                    <td>{x.mobileNum}</td>
                    <td>
                      <div
                        className={`${
                          x.status === "available"
                            ? "bg-[#C9F4C2] text-[#123D0B]"
                            : "bg-[#F4EFC2] text-[#3D380B]"
                        } p-2 max-w-[75px] text-center rounded`}
                      >
                        {x.status}
                      </div>
                    </td>
                    <td>
                      <button
                        className="bg-[#C2EBF4] p-2 rounded text-[#5C848D]"
                        onClick={() => {
                          getSingleData(`${x.uid}`);
                        }}
                      >
                        <a href="#my-modal-2" className="">
                          Edit
                        </a>
                      </button>
                      <button
                        className="bg-[#F4B7B7] p-2 m-2 rounded text-[#6B2E2E]"
                        onClick={() => handleDlt(`${x.uid}`)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <ModalForm
        handleBlur={handleBlur}
        handleSubmit={handleSubmit}
        updateEdit={updateEdit}
        handleEdit={handleEdit}
        single={single}
        setSingle={setSingle}
      />
    </div>
  );
};

export default Home;
