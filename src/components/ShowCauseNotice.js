import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const ShowCauseNotice = () => {
    const [visible, setVisible] = useState(true);

    const closeNotice = () => setVisible(false);

    if (!visible) return null;

    return (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <button
                onClick={closeNotice}
                className="absolute top-0 right-0 p-1 text-green-700 hover:text-green-900"
            >
                &times;
            </button>
            <span className="block sm:inline font-semibold">Show Cause Notice</span>
<p className="mt-1">
  If you are absent for three consecutive days, you must{" "}
  <Link to="/reply" className="text-blue-500 underline">reply</Link>.
  Ignore this message if your attendance was updated.
</p>


        </div> 
    );
};

export default ShowCauseNotice;
