import React from "react";
import "./Service.css";
import dataclean from "./images/data-clean.png";
import dataanalysis from "./images/data-analysis.png";
function Service() {
	return (
		<div className="services">
			<h2>What i Do</h2>
			<p className="sub__heading">Services</p>
			<div className="services__cards">
				<div className="service__item1">
					<img src={dataanalysis} alt="" />
					<h5>Data Visualization</h5>
					<p>
						{" "}
						Representing data in form of charts and figures to make
						clear about distributions for easier understanding of
						problem .Tools used matplotlib,seaborn, tableui,powerBI
					</p>
				</div>
				<div className="service__item1">
					<img src={dataanalysis} alt="" />
					<h5>Data Intuition</h5>
					<p>
						{" "}
						Tyring to understand the data from various sources
						,asking alot of qustions to generate and deliver
						actionable insights
					</p>
				</div>
				<div className="service__item1">
					<img src={dataclean} alt="" />
					<h5>Data Modelling</h5>
					<p>
						{" "}
						Using machinelearning and deeplearning models applying
						to data to make predictions and then deployment
					</p>
				</div>
				<div className="service__item1">
					<img src={dataanalysis} alt="" />
					<h5>Data Wraggling/cleaning</h5>
					<p>
						{" "}
						Get to clean data removing unwanted records , filling
						missing values or dropping ,knowing the plan points
						,making sure data is ready for analysis
					</p>
				</div>
				<div className="service__item1">
					<img src={dataclean} alt="" />
					<h5>Data extraction,transformation and loading </h5>
					<p>
						{" "}
						Extracting data from various sources like databases ,
						online websites ,etc transforming it and loading into
						best format
					</p>
				</div>
				<div className="service__item1">
					<img src={dataanalysis} alt="" />
					<h5>Data Analysis</h5>
					<p>
						{" "}
						Analyzing data knowing its correlations visualizing it
						using data visualizations
					</p>
				</div>
			</div>
		</div>
	);
}

export default Service;
