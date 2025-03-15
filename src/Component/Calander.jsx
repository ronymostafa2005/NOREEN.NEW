import React, { useState } from "react";
import { FaPen, FaTimes } from "react-icons/fa";
//----------------------------------
const Calander = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Monthly Task</h2>
        <button style={styles.editButton} onClick={() => setIsModalOpen(true)}>
          <FaPen />
        </button>
      </div>
      <h3 style={styles.selectedDate}>September, 12 ✍️</h3>
      <p style={styles.taskCount}>15 tasks today</p>
      <div style={styles.dateTabs}>
        {[11, 12, 13, 14, 15].map((day, index) => (
          <div
            key={index}
            style={day === 12 ? styles.selectedDay : styles.dayTab}
          >
            <span style={styles.dayNumber}>{day}</span>
            <span style={styles.dayText}>Thu</span>
          </div>
        ))}
      </div>
      <div style={styles.calendarContainer}>
        <table style={styles.calendarTable}>
          <thead>
            <tr>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                (day, index) => (
                  <th key={index} style={styles.dayHeader}>{day}</th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, weekIndex) => (
              <tr key={weekIndex}>
                {Array.from({ length: 7 }).map((_, dayIndex) => (
                  <td key={dayIndex} style={styles.dayCell}> {
                    weekIndex * 7 + dayIndex + 1 <= 30
                      ? weekIndex * 7 + dayIndex + 1
                      : ""
                  } </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <button style={styles.closeButton} onClick={() => setIsModalOpen(false)}>
              <FaTimes />
            </button>
            <h3 style={styles.modalTitle}>Add Event</h3>
            <label style={styles.label}>Name:</label>
            <input type="text" style={styles.input} placeholder="Enter event name" />
            <h4 style={styles.subTitle}>Due Date</h4>
            <div style={styles.dateInputs}>
              <input type="text" style={styles.dateInput} value="22" readOnly />
              <input type="text" style={styles.dateInput} value="1" readOnly />
              <input type="text" style={styles.dateInput} value="2025" readOnly />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: { maxWidth: "400px", margin: "auto", textAlign: "center", fontFamily: "Arial", padding: "20px" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  title: { fontSize: "20px", fontWeight: "bold" },
  editButton: { background: "none", border: "none", fontSize: "18px", cursor: "pointer" },
  selectedDate: { fontSize: "18px", fontWeight: "bold" },
  taskCount: { color: "#666", fontSize: "14px" },
  dateTabs: { display: "flex", justifyContent: "center", gap: "10px", margin: "10px 0", flexWrap: "wrap" },
  dayTab: { padding: "10px", background: "#f0f0f0", borderRadius: "10px" },
  selectedDay: { padding: "10px", background: "#3b82f6", color: "white", borderRadius: "10px" },
  calendarContainer: { marginTop: "20px", overflowX: "auto" },
  calendarTable: { width: "100%", borderCollapse: "collapse" },
  dayHeader: { fontWeight: "bold", padding: "5px" },
  dayCell: { padding: "10px", textAlign: "center", border: "1px solid #ddd" },
  modalOverlay: { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center" },
  modal: { background: "white", padding: "20px", borderRadius: "10px", width: "90%", maxWidth: "400px", textAlign: "center", position: "relative" },
  closeButton: { position: "absolute", top: "10px", right: "10px", background: "#3b82f6", color: "white", borderRadius: "50%", border: "none", width: "30px", height: "30px", cursor: "pointer" },
  modalTitle: { fontSize: "18px", fontWeight: "bold" },
  label: { display: "block", textAlign: "left", margin: "10px 0 5px" },
  input: { width: "100%", padding: "10px", border: "1px solid #ddd", borderRadius: "5px" },
  subTitle: { fontSize: "16px", fontWeight: "bold", margin: "10px 0" },
  dateInputs: { display: "flex", justifyContent: "space-around", marginTop: "10px" },
  dateInput: { width: "50px", padding: "8px", textAlign: "center", borderRadius: "5px", border: "1px solid #ddd" }
};

export default Calander;