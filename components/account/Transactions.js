import Image from 'next/image'
import React from 'react'

function Transactions() {
  return (
    <>
      <div className="bg-gray-50">
        <div>
          <div className="p-2">
            <div className="bg-white p-4 rounded-md">
              <div>
                <div>
                  <div>
                    <div className="flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                      <div>
                        <span>Name</span>
                      </div>
                      <div>
                        <span>Email</span>
                      </div>
                      <div>
                        <span>Role</span>
                      </div>
                      <div>
                        <span>Time</span>
                      </div>
                      <div>
                        <span>Edit</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                        <div className="px-2 flex">
                          <span>John Deo</span>
                        </div>
                        <div>
                          <span>johndeo@gmail.com</span>
                        </div>
                        <div className="px-2">
                          <span>Admin</span>
                        </div>
                        <div className="px-2">
                          <span>28/12/2021</span>
                        </div>
                        <div className="px-2">
                          <select>
                            <option>Admin</option>
                            <option>User</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex justify-between border-t-2 text-sm font-normal mt-4 space-x-4">
                        <div className="px-2">
                          <span>John Deo</span>
                        </div>
                        <div>
                          <span>johndeo@gmail.com</span>
                        </div>
                        <div className="px-2">
                          <span>Admin</span>
                        </div>
                        <div className="px-2">
                          <span>28/12/2021</span>
                        </div>
                        <div className="px-2">
                          <select>
                            <option>Admin</option>
                            <option>User</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex justify-between border-t-2 text-sm font-normal mt-4 space-x-4">
                        <div className="px-2">
                          <span>John Deo</span>
                        </div>
                        <div>
                          <span>johndeo@gmail.com</span>
                        </div>
                        <div className="px-2">
                          <span>Admin</span>
                        </div>
                        <div className="px-2">
                          <span>28/12/2021</span>
                        </div>
                        <div className="px-2">
                          <select>
                            <option>Admin</option>
                            <option>User</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Transactions