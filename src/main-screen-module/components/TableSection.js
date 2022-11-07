import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Text, FontWeight } from "styled-typography";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "../../assets/styles/globalStyles";
import {
  addProduct,
  updateProduct,
  updateStatus,
} from "../../reducers/Products";
import CloseIcon from "../../assets/icons/CloseIcon";
import TickIcon from "../../assets/icons/TickIcon";
import { Button } from "../../assets/styles/globalStyles";
import Modal from "styled-react-modal";

const TableWrapper = styled.section`
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  margin-top: 20px;
  background-color: white;
  svg {
    max-height: 24px;
    max-width: 24px;
    background: transparent;
  }
`;

const StyledTable = styled.table`
  text-align: left;
  margin-bottom: 1rem;
  border-collapse: collapse;
  th {
    padding: 16px;
  }
  td {
    padding: 0 16px;
    border-top: 1px solid #ecf1f4;
  }
  tr:first-child {
    padding: none;
  }
  tr > td:last-child {
    background: #e5e5e5 !important;
  }
`;

const ProductImage = styled.img`
  height: 50px;
`;

const StatusWrapper = styled.div`
  display: flex;
`;

const StatusLabel = styled.button`
  align-items: center;
  max-width: 120px;
  width: 120px;
  border-radius: 20px;
  padding: 6px 16px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  outline: none;
  cursor: pointer;
  border: none;
  min-width: 100px;
  background: ${(props) => props.bg};
  color: white;
`;

const StatusUpdateButton = styled.button`
  background: transparent;
  align-items: center;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  margin-left: 16px;
  outline: none;
  border: none;
`;

const StyledModal = Modal.styled`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: #fff;
  width: 350px;
  height: 250px;
  padding: 24px;
  border-radius:5px;
`;

const StyledModalEdit = Modal.styled`
display: flex;
justify-content: center;
flex-direction:column;
align-items: center;
width: -webkit-fit-content;
width: -moz-fit-content;
width: fit-content;
margin: 96px auto;
background: #fff;
box-shadow: 0 6px 33px rgb(0 0 0 / 8%);
border-radius: 8px;
padding: 32px 33px 40px 33px;
`;

const StyledModalAdd = Modal.styled`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  padding: 16px;
  border-radius:5px;
`;

const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-content: center;
  padding-bottom: 10px;
`;
const ModalFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-top: 10px;
`;

const TableSectionHeaderWrapper = styled.div`
  display: flex;
  justify-content: right;
  padding-top: 10px;
  padding-bottom: 15px;
`;

const EditModalTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const EditModalBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const EditModalTitleRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ProductImageEditModal = styled.img`
  width: 45%;
  height: auto;
`;

const ValueGridWrapper = styled.form`
  display: grid;
  width: 65%;
  grid-template-columns: auto auto;
`;

const ValueGridItem = styled.div`
  padding: 16px;
  text-align: left;
`;

function TableSection() {
  const dispatch = useDispatch();
  const ProductList = useSelector((state) => state.products.value);
  const tableTitle = [
    "Product Name",
    "Brand",
    "Price",
    "Quantity",
    "Total",
    "Status",
  ];
  const [missingIsOpen, setMissingIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [addIsOpen, setAddIsOpen] = useState(false);
  const [updateProductId, setUpdateProductId] = useState(""); //for storing product id of clicked item which is to be updated by the user
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(price * quantity);
  const [error, setError] = useState(false);
  const getMissingPopUpProductId = () => {
    let missingPopupItem = ProductList.find(
      (product) => product.id === updateProductId
    );
    return missingPopupItem.product_name;
  };

  const getEditPopUpProduct = () => {
    let editPopupProduct = ProductList.find(
      (product) => product.id === updateProductId
    );
    return editPopupProduct;
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    if (price < 1 || quantity < 1) {
      setError(true);
    } else {
      setError(false)
      dispatch(
        updateProduct({
          id: updateProductId,
          price,
          quantity,
          total,
        })
      );
      setEditIsOpen(!editIsOpen);
    }
  };

  useEffect(() => {
    setTotal((price * quantity).toFixed(2));
  }, [price, quantity]);

  return (
    <>
      <TableWrapper>
        <Container>
          {/* <TableSectionHeaderWrapper>
            <Text
              level={2}
              fontWeight={FontWeight.Bold}
              lineHeight={1.3}
              onClick={() => setAddIsOpen(!addIsOpen)}
            >
              ADD
            </Text>
          </TableSectionHeaderWrapper> */}
          <StyledModalAdd
            isOpen={addIsOpen}
            onBackgroundClick={() => {
              setEditIsOpen(!editIsOpen);
            }}
            onEscapeKeydown={() => {
              setEditIsOpen(!editIsOpen);
            }}
          >
            <span onClick={() => setAddIsOpen(!addIsOpen)}>Close add</span>
          </StyledModalAdd>
          <StyledTable>
            <thead>
              <tr>
                <td></td>
                {tableTitle.map((title) => (
                  <th>
                    <Text
                      level={2}
                      fontWeight={FontWeight.Bold}
                      lineHeight={1.3}
                    >
                      {title}
                    </Text>
                  </th>
                ))}
              </tr>
            </thead>
            {ProductList.map((product) => (
              <tr key={product.id}>
                <td>
                  <ProductImage src={product.product_image}></ProductImage>
                </td>
                <td>
                  <Text level={2} lineHeight={1.3}>
                    {product.product_name}{" "}
                  </Text>
                </td>
                <td>
                  <Text level={2} lineHeight={1.3}>
                    {product.brand}{" "}
                  </Text>
                </td>{" "}
                <td>
                  <Text level={2} lineHeight={1.3}>
                    {product.price}{" "}
                  </Text>
                </td>{" "}
                <td>
                  <Text level={2} lineHeight={1.3}>
                    {product.quantity}{" "}
                  </Text>
                </td>{" "}
                <td>
                  <Text level={2} lineHeight={1.3}>
                    {product.total}{" "}
                  </Text>
                </td>
                <td>
                  <StatusWrapper>
                    {product.status !== "none" ? (
                      <StatusLabel
                        bg={
                          product.status === "approved"
                            ? "#33eb91"
                            : product.status === "missing"
                            ? "orange"
                            : product.status === "missing_urgent"
                            ? "#f44336"
                            : ""
                        }
                      >
                        {product.status}
                      </StatusLabel>
                    ) : (
                      <span style={{ marginLeft: "120px" }}></span>
                    )}
                    <StatusUpdateButton
                      status={product.status}
                      onClick={() => {
                        dispatch(
                          updateStatus({
                            id: product.id,
                            status: "approved",
                          })
                        );
                      }}
                    >
                      {product.status === "approved" ? (
                        <TickIcon fill="#33eb91" />
                      ) : (
                        ""
                      )}
                      {product.status === "missing" ? (
                        <TickIcon fill="black" />
                      ) : (
                        ""
                      )}
                      {product.status === "missing_urgent" ? (
                        <TickIcon fill="black" />
                      ) : (
                        ""
                      )}
                      {product.status === "none" ? (
                        <TickIcon fill="black" />
                      ) : (
                        ""
                      )}
                    </StatusUpdateButton>
                    <StatusUpdateButton
                      status={product.status}
                      onClick={() => {
                        setUpdateProductId(product.id);
                        console.log(updateProductId);
                        setMissingIsOpen(!missingIsOpen);
                      }}
                    >
                      {product.status === "approved" ? (
                        <CloseIcon fill="black" />
                      ) : (
                        ""
                      )}
                      {product.status === "missing" ? (
                        <CloseIcon fill="orange" />
                      ) : (
                        ""
                      )}
                      {product.status === "missing_urgent" ? (
                        <CloseIcon fill="#f44336" />
                      ) : (
                        ""
                      )}
                      {product.status === "none" ? (
                        <CloseIcon fill="black" />
                      ) : (
                        ""
                      )}
                    </StatusUpdateButton>
                    <StatusUpdateButton
                      onClick={() => {
                        setUpdateProductId(product.id);
                        setPrice(product.price);
                        setQuantity(product.quantity);
                        setEditIsOpen(!editIsOpen);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      Edit
                    </StatusUpdateButton>
                  </StatusWrapper>
                </td>
              </tr>
            ))}
          </StyledTable>
          <StyledModal
            isOpen={missingIsOpen}
            onBackgroundClick={() => {
              setMissingIsOpen(!missingIsOpen);
            }}
            onEscapeKeydown={() => {
              setMissingIsOpen(!missingIsOpen);
            }}
          >
            <ModalHeader>
              <Text level={3} fontWeight={FontWeight.Bold} lineHeight={1.3}>
                Missing Products ?
              </Text>
              <div
                onClick={() => {
                  setMissingIsOpen(!missingIsOpen);
                }}
              >
                <CloseIcon fill={"#000"} />
              </div>
            </ModalHeader>
            <Text level={2} lineHeight={1.3}>
              Is '{updateProductId && getMissingPopUpProductId(updateProductId)}
              ' urgent ?
            </Text>
            <ModalFooter>
              <Text
                level={2}
                fontWeight={FontWeight.Bold}
                lineHeight={1.3}
                style={{ paddingRight: "16px", cursor: "pointer" }}
                onClick={() => {
                  dispatch(
                    updateStatus({
                      id: updateProductId,
                      status: "missing_urgent",
                    })
                  );
                  setMissingIsOpen(!missingIsOpen);
                }}
              >
                Yes
              </Text>
              <Text
                level={2}
                fontWeight={FontWeight.Bold}
                lineHeight={1.3}
                onClick={() => {
                  dispatch(
                    updateStatus({
                      id: updateProductId,
                      status: "missing",
                    })
                  );
                  setMissingIsOpen(!missingIsOpen);
                }}
                style={{ cursor: "pointer" }}
              >
                No
              </Text>
            </ModalFooter>
          </StyledModal>
        </Container>

        {
          <StyledModalEdit
            isOpen={editIsOpen}
            onBackgroundClick={() => {
              setEditIsOpen(!editIsOpen);
            }}
            onEscapeKeydown={() => {
              setEditIsOpen(!editIsOpen);
            }}
          >
            <EditModalTitleRow>
              {updateProductId && (
                <EditModalTitle>
                  <Text level={2} fontWeight={FontWeight.Bold} lineHeight={1.3}>
                    {getEditPopUpProduct(updateProductId).product_name}
                  </Text>
                  <Text
                    level={1}
                    fontWeight={FontWeight.Light}
                    lineHeight={1.3}
                  >
                    {getEditPopUpProduct(updateProductId).brand}
                  </Text>
                </EditModalTitle>
              )}
              <div
                onClick={() => {
                  setEditIsOpen(!editIsOpen);
                }}
              >
                <CloseIcon fill={"#000"} />
              </div>
            </EditModalTitleRow>

            {updateProductId && (
              <EditModalBody>
                <ProductImageEditModal
                  src={getEditPopUpProduct(updateProductId).product_image}
                ></ProductImageEditModal>
                <ValueGridWrapper onSubmit={handleEditSubmit}>
                  <ValueGridItem>
                    {" "}
                    <Text
                      level={2}
                      lineHeight={1.3}
                      style={{ paddingTop: "6px" }}
                    >
                      Price {" ($) "}
                    </Text>
                  </ValueGridItem>
                  <ValueGridItem>
                    <input
                      value={price}
                      type={"number"}
                      min={1}
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                    />
                  </ValueGridItem>
                  <ValueGridItem>
                    {" "}
                    <Text
                      level={2}
                      lineHeight={1.3}
                      style={{ paddingTop: "6px" }}
                    >
                      Quantity
                    </Text>
                    <Text level={1} lineHeight={1.3}>
                      / 6 * lb
                    </Text>
                  </ValueGridItem>
                  <ValueGridItem>
                    {" "}
                    <input
                      value={quantity}
                      type={"number"}
                      min={1}
                      onChange={(e) => {
                        setQuantity(e.target.value);
                      }}
                    />
                    <Text level={1} lineHeight={1.3}>
                      / 6 * lb
                    </Text>
                  </ValueGridItem>
                  <ValueGridItem>
                    {" "}
                    <Text
                      level={2}
                      lineHeight={1.3}
                      style={{ paddingTop: "6px" }}
                    >
                      Total
                    </Text>
                  </ValueGridItem>
                  <ValueGridItem>
                    {" "}
                    <Text level={2} lineHeight={1.3}>
                      {total
                        ? total
                        : getEditPopUpProduct(updateProductId).total}
                    </Text>
                  </ValueGridItem>
                  <ValueGridItem></ValueGridItem>
                  
                  <ValueGridItem>
                      {error && (
                        <Text  level={1}  style={{ color: "red" }}>Price , Quantity cannot be less than zero</Text>
                      )}
                  </ValueGridItem>
                </ValueGridWrapper>
              </EditModalBody>
            )}
            <ModalFooter>
              {" "}
              <Button button={"secondary"}>Cancel</Button>
              <Button
                button={"primary"}
                type="submit"
                onClick={handleEditSubmit}
              >
                Send
              </Button>
            </ModalFooter>
          </StyledModalEdit>
        }
      </TableWrapper>
    </>
  );
}

export default TableSection;
