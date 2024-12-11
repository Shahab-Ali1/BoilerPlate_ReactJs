import { Modal } from 'antd';
import React from 'react';
import styles from "./Modal.module.css";

export default function GenericModal({ children, title, open, onCancel, height, width }) {
    return (
        <div>
            <Modal
                title={
                    <div className={styles.modalHeader}>
                        <span>{title}</span>
                    </div>
                }
                style={{ top: 20 }}
                open={open}
                onCancel={onCancel}
                footer={null}
                className={`${styles.customModal} customModal`}
                height={height}
                width={width}
            >
                <div className={styles.modalContent}>
                    {children}

                </div>
            </Modal>
        </div>
    )
}